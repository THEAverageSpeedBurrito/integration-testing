'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('puppies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('puppies').insert({
          id: 1,
          name: 'Gerald',
          age_in_months: 24,
          breed: 'Doxon',
          image_url: 'none'
        }),
        knex('puppies').insert({
          id: 2,
          name: 'marco',
          age_in_months: 28,
          breed: 'Husky',
          image_url: 'pornhub.com'
        })

      ]);
    }).then(function(){
        return knex.raw("SELECT setval('puppies_id_seq', (SELECT MAX(id) FROM puppies))");
    });
};
