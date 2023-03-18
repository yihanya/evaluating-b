const { Sequelize } = require('sequelize');
const dbUtile = require('../utile/db')
const db = dbUtile.newDataBase()
let topicAndTagModel = db.define('topic_tag', {
  //题目id
  topic_and_tag_id: {
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
  //标签id
  tag_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = topicAndTagModel;