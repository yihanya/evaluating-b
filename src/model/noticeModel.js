const { Sequelize } = require('sequelize');
const dbUtile = require('../utile/db')
const db = dbUtile.newDataBase()

let noticeModel = db.define('notice', {
  //公告id
  notice_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  //公告名称
  notice_title: {
    type: Sequelize.STRING(25),
    allowNull: true,
  },
  //公告内容
  notice_text: {
    type: Sequelize.TEXT
  }
})

module.exports = noticeModel;