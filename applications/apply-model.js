const db = require('../data/db-config')



module.exports = {
    get,
    getById,
    insert,
    deleteId,
    remove
  };
  
  function get() {
    return db("applicate");
  }
  
  function getById(id) {
    return db("applicate")
    .where({ id });
  }
  
 async function insert(application) {
    const [id] = await db('applicate').insert(application, 'id');

    return db('applicate')
    .where({id})
    .first();

  }

function deleteId(id) {
   return db('applicate')
   .where({ id })
   .del();
}
function remove() {
  return db('applicate')
   .del('applicate')
}