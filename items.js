const moment = require('moment');

module.exports = [
  {
    id: 1,
    title: 'Hello, World!',
    author: 'The teacher',
    numberOfLikes: 99,
    createdAt: moment().subtract(7, 'days'),
    updatedAt: moment().subtract(6, 'days'),
    image: {
      // eslint-disable-next-line max-len
      src: 'https://static.tildacdn.com/5d8f0d6b-4de8-4527-bd2e-56ea4400c1c9/thinknetica_transparent_grey_with_slogan.png',
      alt: 'Hello, World!',
      width: 300,
      height: 52
    }
  },
  {
    id: 2,
    title: 'The new entry. Part I.',
    author: 'The first learner',
    numberOfLikes: 57,
    createdAt: moment().subtract(2, 'days'),
    updatedAt: moment().subtract(1, 'days'),
    image: {
      src: 'http://teachbase.ru/media/static/images/logo.svg',
      alt: 'The new entry. Part I.',
      width: 300,
      height: 52
    }
  },
  {
    id: 3,
    title: '[WIP] The new entry. Part II.',
    author: 'The first learner',
    createdAt: moment(),
    updatedAt: moment(),
  },
];
