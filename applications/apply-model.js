const db = require('../data/db-config')



module.exports = {
    get,
    getById,
    add
  };
  
  function get() {
    return db("apply");
  }
  
  function getById(id) {
    return db("apply").where({ id });
  }
  
  function add(resource) {
    return db("apply").insert(resource);
  } 