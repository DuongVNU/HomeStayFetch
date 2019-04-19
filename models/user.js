'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: {
      type:DataTypes.STRING,
      allowNull: false,
      required: true
    },
    lastName: {
      type:DataTypes.STRING,
      allowNull: false,
      required: true
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      required: true
    },
    hash: {
      type:DataTypes.STRING,
      allowNull: false,
      required: true
    }
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.belongsToMany(models.roles, { through: 'user-role', foreignKey: 'idUser', otherKey: 'idRole'})
  };
  return user;
};