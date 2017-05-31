'use strict';
const api = require('express').Router()
const db = require('../db')
const Models = require('../db/models');
const Campus = Models.Campus;
const User = Models.User;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

//*** my code starts here ***//

//Get all Campuses
api.get('/campuses', (req, res, next) => {
	Campus.findAll({})
	.then(campuses => res.send(campuses))
	.catch(next);
});

//Get all Students
api.get('/students', (req, res, next) => {
	User.findAll({
		include: [ { model: Campus, as: 'HomeCampus'} ]
	})
	.then(students => res.send(students))
	.catch(next);
});

//Get a campus by id
api.get('/campuses/:campusId', (req, res, next) => {
	Campus.findOne({
		where: { id: req.params.campusId }
	})
	.then(campus => res.send(campus))
	.catch(next);
});

//Get a student by id
api.get('/students/:studentId', (req, res, next) => {
	User.findOne({
		where: { id: req.params.studentId },
		include: [ {model: Campus, as: 'HomeCampus'} ]
	})
	.then(student => res.send(student))
	.catch(next);
});

//Add a new campus
api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
	.then(campus => res.send(campus))
	.catch(next);
});

//Add a new student
api.post('/students', (req, res, next) => {
	User.create({
		name: req.body.name,
		email: req.body.email,
		HomeCampusId: +req.body.HomeCampusId
	})
	.then(student => {
		User.findOne({
			where: { id: student.id },
			include: [ {model: Campus, as: 'HomeCampus'} ]
		})
		.then(newStudent => res.send(newStudent));
	})
	.catch(next);
});

//Delete a student
api.delete('/students/:studentId', (req, res, next) => {
	User.findOne({
		where: { id: req.params.studentId }
	})
	.then(student => {
		student.destroy();
		res.send(student);
	})
	.catch(next);
});

//Delete a campus
api.delete('/campuses/:campusId', (req, res, next) => {
	Campus.findOne({
		where: { id: req.params.campusId }
	})
	.then(campus => {
		campus.destroy();
		res.send(campus);
	})
	.catch(next);
});


//Get all students from a campus
api.get('/campuses/:campusId/students', (req, res, next) => {
	User.findAll({
		where: { HomeCampusId: req.params.campusId }
	})
	.then(students => res.send(students))
	.catch(next);
});


//Update a student profile
api.put('/students/:studentId', (req, res, next) => {
	console.log('*** req.body', req.body);

	User.findById(req.params.studentId)
	.then(student => {
		student.update({
			name: req.body.name,
			email: req.body.email,
			HomeCampusId: req.body.HomeCampusId
		})
		.then(() => {
			User.findOne({
				where: { id: req.params.studentId },
				include: [ {model: Campus, as: 'HomeCampus'} ]
			})
			.then(allStudInfo => res.send(allStudInfo));
		});
	})
	.catch(next);
});

api.put('/campuses/:campusId', (req, res, next) => {
	console.log('****', req.body);
	Campus.findById(req.params.campusId)
	.then(campus => {
		return campus.update(req.body);
	})
	.then(updatedCampus => res.send(updatedCampus))
	.catch(next);
});

module.exports = api;
