module.exports = (sequelize, dataTypes) => {

    const Purchase = sequelize.define('Purchase', {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },
            total:dataTypes.INTEGER,
            user_id:dataTypes.INTEGER,
            purchase_address:dataTypes.INTEGER
        },
        {
            tableName: 'purchases',
            timestamps: false
        }
    );


    return Purchase

}

// Purchase.associate = function(models) {
//     Purchase.belongsTo(models.User, {
//         as: "users",
//         foreignKey: "id",
//         timestamps:false
//     });
//     Purchase.hasOne(models.Address, {
//         as: "addresses",
//         foreignKey: "id",
//         timestamps:false
//     })

// }