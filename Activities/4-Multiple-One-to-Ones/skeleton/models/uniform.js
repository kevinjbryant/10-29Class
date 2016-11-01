'use strict';
module.exports = function(sequelize, DataTypes) {
  var Uniform = sequelize.define('Uniform', {
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Uniform;
};