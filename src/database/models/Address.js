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
        city:dataTypes.STRING,
        state:dataTypes.STRING,
        country:dataTypes.STRING
    }, {
        tableName:'addresses',
        timestamps:false
    });

    return Address
}