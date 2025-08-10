const { DataTypes } = require('sequelize');
const sequelize = require('../../shared/infrastructure/db/mysql/sequelize');
//comment test
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  removedAt: {
    type: DataTypes.DATE,
  },
}, {
    timestamps: true,
    tableName: 'User',
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt'
});

module.exports = User;
