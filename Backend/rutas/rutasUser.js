const controlerUser = require('../controlers/controlerUser');

module.exports = (app) =>{
    //GET -> OBTERNER DATOS
    //POST -> ALMACENAR DATOS
    //PUT -> ACTUALIZAR DATOS
    //DELETE -> ELIMINAR DATOS

    app.post('/api/users/create', controlerUser.register)
}