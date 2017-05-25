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
	.then(campuses => {
		res.send(campuses);
	})
	.catch(next);
});

//Get all Students
api.get('/students', (req, res, next) => {
	User.findAll({
		include: [
			{ model: Campus, as: 'HomeCampus'},
		]
	})
	.then(students => {
		res.send(students);
	})
	.catch(next);
});

//Get a campus by id
api.get('/campuses/:campusId', (req, res, next) => {
	Campus.findOne({
		where: {
			id: req.params.campusId
		}
	})
	.then(campus => {
		res.send(campus);
	})
	.catch(next);
});

//Get a student by id
api.get('/students/:studentId', (req, res, next) => {
	User.findOne({
		where: {
			id: req.params.studentId
		},
		include: [
			{model: Campus, as: 'HomeCampus'},
		]
	})
	.then(student => {
		console.log('**API ROUTE STUDENT', student);
		res.send(student);
	})
	.catch(next);
});

//Add a new campus
api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
	.then(campus => {
		res.send(campus);
	})
	.catch(next);
});

//Add a new student
api.post('/students', (req, res, next) => {
	console.log('*** req.body', req.body);
	User.create({
		name: req.body.name,
		email: req.body.email,
		HomeCampusId: +req.body.HomeCampusId
	})
	.then(student => {
		console.log('*** NEW STUDENT', student);
		res.send(student);
	})
	.catch(next);
});

//Delete a student
api.delete('/students/:studentId', (req, res, next) => {
	User.findOne({
		where: {
			id: req.params.studentId
		}
	})
	.then(student => {
		student.destroy();
		console.log('student supposed to be destroyed');
		res.send(student);
	})
	.catch(next);
});

module.exports = api;
