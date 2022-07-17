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
            as: 'categoria',
            foreignKey: 'arcana_id'
        })
    }

    return Product

}