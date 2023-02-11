const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {

    id: {
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    heightMin:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    heightMax:{
      type: DataTypes.INTEGER,
      allowNull:false
    },


    weightMin:{
      type: DataTypes.INTEGER,
      allowNull:false
    },

    weightMax:{
      type: DataTypes.INTEGER,
      allowNull:false
    },

    lifeMin:{
      type:DataTypes.INTEGER,
    },
    lifeMax:{
      type:DataTypes.INTEGER
    },

    img:{
      type:DataTypes.STRING,
      defaultValue: "https://cdn-icons-png.flaticon.com/512/1246/1246023.png?w=826&t=st=1675794859~exp=1675795459~hmac=3602ce87fc4d90f57357241b33a54f85e0012bab0886ec33cbcc8b0da1b6e8fe"
    },

    createdDB:{
      type:DataTypes.BOOLEAN,
      defaultValue:true,
      allowNull:false
    },

  },
  {timestamps:false}
  );
};
