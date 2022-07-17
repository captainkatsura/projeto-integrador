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

    return Arcana

}