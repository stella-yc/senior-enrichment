'use strict';

// var chance = require('chance')(123);
// var toonAvatar = require('cartoon-avatar');
// var Promise = require('bluebird');

// var db = require('./server/db');
// // var User = require('./server/api/users/user.model');
// var Story = require('./server/api/stories/story.model');

// var numUsers = 100;
// var numStories = 500;

// var emails = chance.unique(chance.email, numUsers);

// function doTimes (n, fn) {
//   var results = [];
//   while (n--) {
//     results.push(fn());
//   }
//   return results;
// }

// function randPhoto (gender) {
//   gender = gender.toLowerCase();
//   var id = chance.natural({
//     min: 1,
//     max: gender === 'female' ? 114 : 129
//   });
//   return toonAvatar.generate_avatar({ gender: gender, id: id });
// }

// function randUser () {
//   var gender = chance.gender();
//   return User.build({
//     name: [chance.first({gender: gender}), chance.last()].join(' '),
//     photo: randPhoto(gender),
//     phone: chance.phone(),
//     email: emails.pop(),
//     password: chance.word(),
//     isAdmin: chance.weighted([true, false], [5, 95])
//   });
// }

// function randTitle () {
//   var numWords = chance.natural({
//     min: 1,
//     max: 8
//   });
//   return chance.sentence({words: numWords})
//   .replace(/\b\w/g, function (m) {
//     return m.toUpperCase();
//   })
//   .slice(0, -1);
// }

// function randStory (createdUsers) {
//   var user = chance.pick(createdUsers);
//   var numPars = chance.natural({
//     min: 3,
//     max: 20
//   });
//   return Story.build({
//     author_id: user.id,
//     title: randTitle(),
//     paragraphs: chance.n(chance.paragraph, numPars)
//   });
// }

// function generateUsers () {
//   var users = doTimes(numUsers, randUser);
//   users.push(User.build({
//     name: 'Zeke Nierenberg',
//     photo: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/zeke-astronaut.png',
//     phone: '(510) 295-5523',
//     email: 'zeke@zeke.zeke',
//     password: '123',
//     isAdmin: true
//   }));
//   users.push(User.build({
//     name: 'Omri Bernstein',
//     photo: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/sloth.jpg',
//     phone: '(781) 854-8854',
//     email: 'omri@zeke.zeke',
//     password: '123'
//   }));
//   return users;
// }

// function generateStories (createdUsers) {
//   return doTimes(numStories, function () {
//     return randStory(createdUsers);
//   });
// }

// function createUsers () {
//   return Promise.map(generateUsers(), function (user) {
//     return user.save();
//   });
// }

// function createStories (createdUsers) {
//   return Promise.map(generateStories(createdUsers), function (story) {
//     return story.save();
//   });
// }

// function seed () {
//   return createUsers()
//   .then(function (createdUsers) {
//     return createStories(createdUsers);
//   });
// }

// console.log('Syncing database');

// db.sync({force: true})
// .then(function () {
//   console.log('Seeding database');
//   return seed();
// })
// .then(function () {
//   console.log('Seeding successful');
// }, function (err) {
//   console.error('Error while seeding');
//   console.error(err.stack);
// })
// .finally(function () {
//   db.close();
//   return null;
// });



const User = require('./db/models/user');
const db = require('./db');
const campuses = [
  { name: 'Mars', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Mars_Hubble.jpg' },
  { name: 'Luna', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Moon_apollo12.jpg' },
  { name: 'Terra', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif' },
  { name: 'Titan', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Titan_multi_spectral_overlay.jpg' }
];

const createCampuses = () => {
  campuses.forEach(campus => {
    User.create({
      name: campus.name,
      imageUrl: campus.imageUrl
    })
      .then(() => {
        console.log('user created!');
      });
  });
};

db.sync({force:true})
  .then(() => createCampuses())
  .catch(console.error);

