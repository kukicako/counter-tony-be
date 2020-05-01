
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('apply').del()
    .then(function () {
      // Inserts seed entries
      return knex('apply').insert([
        {id: 1, name: 'john', email: 'johndoe@gmail.com', rank: 'silver', steam: '121321321', questions:"do you do?"},
        {id: 2, name: 'ralue', email: 'doe@gmail.com', rank: 'Rank S', steam: '125681551', questions:"how do?"},
        {id: 3, name: 'luel', email: 'hne@gmail.com', rank: 'lvl8', steam: '86732131', questions:"where you do?"},
      ]);
    });
};
