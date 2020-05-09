
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('applicate').del()
    .then(function () {
      // Inserts seed entries
      return knex('applicate').insert([
        {id: 1, name: 'john', email: 'johndoe@gmail.com', rank: 'silver', aoi: 'i wanna be better at dis', steam: '121321321', questions:"do you do?"},
        {id: 2, name: 'ralue', email: 'doe@gmail.com', rank: 'Rank S', aoi: 'i wanna be better at dat', steam: '125681551', questions:"how do?"},
        {id: 3, name: 'luel', email: 'hne@gmail.com', rank: 'lvl8',aoi: 'i wanna be better at all of it', steam: '86732131', questions:"where you do?"},
      ]);
    });
};
