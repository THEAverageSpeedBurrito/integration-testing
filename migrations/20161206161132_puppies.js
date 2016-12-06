'use strict';
const knex = require('knex');

exports.up = function(knex, Promise) {
  knex.schema.createTable('puppies', (table) => {
    table.increments();
    table.string('name');
    table.integer('age_in_months');
    table.string('breed');
    table.text('image_url');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('puppies');
};
