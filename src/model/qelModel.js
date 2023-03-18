const { Sequelize } = require('sequelize');
const dbUtile = require('../utile/db')
const db = dbUtile.newDataBase()

let qelModel = db.define('qel', {
  //公告id
  qel_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  //题单名称
  qel_title: {
    type: Sequelize.STRING(25),
    allowNull: true,
  },
  //题单描述
  qel_describe: {
    type: Sequelize.TEXT
  },
  //题单数量
  qel_number: {
    type: Sequelize.INTEGER
  }
})

module.exports = qelModel;