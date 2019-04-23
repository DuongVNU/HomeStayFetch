'use strict';

module.exports = (sequelize, DataTypes) => {
  const role_detail = sequelize.define('role-detail', {
    idRole: DataTypes.INTEGER,
    actionName: DataTypes.STRING,
    actionCode: DataTypes.STRING,
    checkAction: DataTypes.BOOLEAN
  }, {});
  role_detail.associate = function(models) {
    // associations can be defined here
    role_detail.belongsTo(models.roles, {foreignKey: 'idRole', targetKey: 'id'});
  };
  return role_detail;
};