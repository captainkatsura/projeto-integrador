const { validationResult } = require('express-validator');
const db = require('../database/models/index')

const editarController = {
    main: (req, res) => {
        res.render('editar');
    },
    cadastrar: async (req, res) => {
        let errors = validationResult(req);

        if(!errors.isEmpty()) {
            console.log(errors.mapped())
            return res.render('editar', { errors: errors.mapped() })
        }

        const data = req.body;                      //OK de verdade
        // console.log('data', data);

        try {
            let newAddress = await db.Address.create({
            street: data.street,
            house_number: data.house_number,
            district: data.district,
            cep: data.cep,
            city: data.city,
            state: data.state,
            country: data.country
        })
        await db.User.create({
            user_name: data.user_name,
            email: data.email,
            cpf: data.cpf,
            phone_number: data.phone_number,
            senha: data.senha,
            address_id: newAddress.id
    })
        res.send("registrado com sucesso!!")
    } catch(e) {
        console.log(e.message)
        res.send("não registrou.")
    }
    }
};


module.exports = editarController;