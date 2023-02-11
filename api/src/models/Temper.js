const { DataTypes, sequelize } = require('sequelize')
module.exports = (sequelize) => {
    sequelize.define('temper',{
        name:{
            type:DataTypes.STRING
        }
    },
    {timestamps: false}
    );
}