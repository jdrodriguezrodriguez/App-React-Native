const User = require('../modelos/modeloUser');

module.exports = {
    register(req, res){
        const user = req.body;
        User.create(user, (err,data) => {
            if (err){
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                massege: 'El registro se realizo correctamente',
                data: data
            });
        })
    }
}