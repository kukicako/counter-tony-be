const db = require('../data/db-config')



module.exports = {
    get,
    getById,
    insert,
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
  
 async function insert(application) {
    const [id] = await db('apply').insert(application, 'id');

    return db('apply')
    .where({id})
    .first();

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