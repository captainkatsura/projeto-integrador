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

    Purchase.associate = (models) => {
        Purchase.belongsTo(models.User, {
            as: 'compra',
            foreignKey: 'user_id'
        });
        Purchase.belongsTo(models.Address, {
            as: 'endereço de entrega',
            foreignKey: 'purchase_address'
        });
        Purchase.belongsToMany(models.Product, {
            as: 'compra que contém o produto',
            foreignKey: 'purchase_id',
            through: 'purchase_products',
            otherKey: 'product_id',
            timestamps: false
        })
    }

    return Purchase
}