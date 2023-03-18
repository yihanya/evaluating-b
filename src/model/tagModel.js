const { Sequelize } = require('sequelize');
const dbUtile = require('../utile/db')
const db = dbUtile.newDataBase()

let tagModel = db.define('tag', {
  //标签id
  tag_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  //标签名称
  tag_name: {
    type: Sequelize.STRING(25),
    allowNull: true,
  },
})

module.exports = tagModel;