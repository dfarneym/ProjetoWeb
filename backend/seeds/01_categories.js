
const categories = require('../categories');

exports.seed = function(knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert(categories);
    });
};
