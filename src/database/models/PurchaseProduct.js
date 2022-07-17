module.exports = (sequelize, dataTypes) => {

    const PurchaseProduct = sequelize.define('PurchaseProduct', {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },
            product_id:dataTypes.INTEGER,
            purchase_id:dataTypes.INTEGER
        },
        {
            tableName: 'purchase_products',
            timestamps: false
        }
    );

    return PurchaseProduct

}