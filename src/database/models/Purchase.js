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
            through: 'purchase_products',
            as: 'produtos da compra',
            foreignKey: 'product_id',
            otherKey: 'purchase_id',
            timestamps: false
        })
    }

    return Purchase
}