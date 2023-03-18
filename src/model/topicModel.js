const { Sequelize } = require('sequelize');
const dbUtile = require('../utile/db')
const db = dbUtile.newDataBase()
let topicModel = db.define('topic', {
  //题目id
  topic_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  //题目名称
  topic_title: {
    type: Sequelize.STRING(55),
    allowNull: true,
  },
  //题目内容
  topic_describe: {
    type: Sequelize.TEXT
  },
  //题目难度
  topic_difficulty: {
    type: Sequelize.STRING(6),
  },
  //时间复杂度
  time_complexity: {
    type: Sequelize.INTEGER,
  },
  //空间复杂度
  space_complexity: {
    type: Sequelize.INTEGER,
  },
  //题目通过
  topic_ac: {
    type: Sequelize.INTEGER,
  },
  //提交次数
  topic_sub: {
    type: Sequelize.INTEGER,
  },
  //状态 '审核 0未通过 1通过 2比赛题目 3驳回
  topic_review: {
    type: Sequelize.INTEGER,
  }
})

module.exports = topicModel;