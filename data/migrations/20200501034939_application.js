exports.up = function(knex) {
    return knex.schema.createTable('apply', tbl => {
      tbl.increments();
  
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
      tbl
        .string('email', 255)
        .notNullable()
        .unique();
      tbl
      .string('rank', 255)
      .notNullable();
      tbl
      .string('steam', 255)
      .notNullable()
      .unique();
      tbl
      .string('questions', 500)
      
      
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('apply');
  };
