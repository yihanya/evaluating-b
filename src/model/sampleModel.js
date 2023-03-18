const { Sequelize } = require('sequelize');
const dbUtile = require('../utile/db')
const db = dbUtile.newDataBase()
let sampleModel = db.define('sample', {
  //实例id
  sample_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  //题目id
  topic_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  //输入数据
  in_data: {
    type: Sequelize.TEXT
  },
  //输出数据
  out_data: {
    type: Sequelize.TEXT
  }

})

module.exports = sampleModel;