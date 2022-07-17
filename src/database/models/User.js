module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        user_name:dataTypes.STRING,
        email:dataTypes.STRING,
        cpf:dataTypes.STRING,
        phone_number:dataTypes.STRING,
        senha:dataTypes.STRING,
        user_picture:dataTypes.STRING,
        address_id:dataTypes.INTEGER
    }, {
        tableName:'users',
        timestamps:false
    });

    User.associate = function(models) {
        User.belongsTo(models.Address, {
            as: "endereço",
            foreignKey: "address_id"
        })
    }

    return User
}