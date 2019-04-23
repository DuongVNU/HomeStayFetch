'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_role = sequelize.define('user-role', {
    idRole: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER
  }, {});
  user_role.associate = function(models) {
    // associations can be defined here
  };
  return user_role;
};