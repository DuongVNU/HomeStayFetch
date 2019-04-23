'use strict';
module.exports = (sequelize, DataTypes) => {
  const commands = sequelize.define('commands', {
    commandName: DataTypes.STRING
  }, {});
  commands.associate = function(models) {
    // associations can be defined here
  };
  return commands;
};