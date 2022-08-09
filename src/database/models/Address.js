module.exports = (sequelize, dataTypes) => {
    
    const Address = sequelize.define('Address', {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        street:dataTypes.STRING,
        house_number:dataTypes.INTEGER,
        district:dataTypes.STRING,
        cep: dataTypes.STRING,
        city:dataTypes.STRING,
        state:dataTypes.STRING,
        country:dataTypes.STRING
    }, {
        tableName:'addresses',
        timestamps:false
    });

    Address.associate = (models) => {
        Address.hasMany(models.User, {
            as: "usuário",
            foreignKey: "address_id"
        });
        Address.hasMany(models.Purchase, {
            as: "produto(s)",
            foreignKey: "purchase_address"
        })
    };

    return Address
}