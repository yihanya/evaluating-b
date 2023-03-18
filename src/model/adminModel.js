const { Sequelize } = require('sequelize');
const dbUtile = require('../utile/db')
const db = dbUtile.newDataBase()

let adminModel = db.define('admin', {
  //公告id
  admin_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  //密码
  admin_password: {
    type: Sequelize.STRING(25),
    allowNull: true,
  },
  //权限
  authority: {
    type: Sequelize.STRING(1),
    allowNull: false,
  },
  //管理员名称
  admin_name: {
    type: Sequelize.STRING(25),
    allowNull: true,
  },
})

module.exports = adminModel;