const PurchaseProduct = require("./PurchaseProduct");

module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define('Product', {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },
            persona_name: {
                type: dataTypes.STRING
            },
            persona_img: {
                type: dataTypes.STRING
            },
            arcana_id: {
                type: dataTypes.INTEGER
            },
            persona_level: {
                type: dataTypes.INTEGER
            },
            persona_description: {
                type: dataTypes.STRING
            },
            product_price: {
                type: dataTypes.INTEGER
            }
        },
        {
            tableName: 'products',
            timestamps: false
        }
    );

    Product.associate = (models) => {
        Product.belongsTo(models.Arcana, {
            as: "arcana",
            foreignKey: 'arcana_id'
        });
        Product.belongsToMany(models.Purchase, {
            as: 'produtos da compra',
            foreignKey: 'product_id',
            through: 'purchase_products',
            otherKey: 'purchase_id',
            timestamps: false
        })
  };

    return Product

}

