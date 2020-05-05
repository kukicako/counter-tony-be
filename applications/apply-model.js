const db = require('../data/db-config')



module.exports = {
    get,
    getById,
    add,
    deleteId,
    remove
  };
  
  function get() {
    return db("apply");
  }
  
  function getById(id) {
    return db("apply")
    .where({ id });
  }
  
  function add(application) {
    return db("apply")
    .insert(application);
  }

function deleteId(id) {
   return db('apply')
   .where({ id })
   .del();
}
function remove() {
  return db('apply')
   .del('Apply')
}