'use strict';
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    nameRole: DataTypes.STRING
  }, {});
  roles.associate = function(models) {
    // associations can be defined here
    roles.belongsToMany(models.user, { through: 'user-role', foreignKey: 'idUser', otherKey: 'idRole'})
  };
  return roles;
};