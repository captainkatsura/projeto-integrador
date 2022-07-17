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
                type: dataTypes.FLOAT
            }
        },
        {
            tableName: 'products',
            timestamps: false
        }
    );

    return Product

}