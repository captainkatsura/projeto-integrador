module.exports = (sequelize, dataTypes) => {

    const Arcana = sequelize.define('Arcana', {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },
            arcana_type:dataTypes.STRING
        },
        {
            tableName: 'arcanas',
            timestamps: false
        }
    );

    Arcana.associate = (models) => {
        Arcana.hasMany(models.Product, {
            as: "persona",
            foreignKey: "arcana_id"
        })
    }

    return Arcana

}