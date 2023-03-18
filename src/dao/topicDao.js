//数据库工具类
const dbUtile = require('../utile/db')
//获取数据库链接
let db = dbUtile.newDataBase();
//题目dao层
let topicDao = {}
//题目模型
const topicModel = require("../model/topicModel")
//dao层实现

topicDao.addTopic = async (topicObj) => {
  let addInfo = await topicModel.create(topicObj)
  return addInfo;
}
topicDao.getAllTopic = async () => {
  let allTopic = topicModel.findAll()
  return allTopic;
}
topicDao.getTopicItem = async (type, field) => {
  let topicItem = {};
  [topicItem,] = await db.query(`select * from topics where ${type} = ${'"' + field + '"'}`)
  return topicItem[0]
}
topicDao.getTopicPage = async (page, limit) => {
  let allTopic = topicModel.findAll({
    offset: (page - 1) * limit,
    limit: (limit - 0)
  })
  return allTopic;
}

topicDao.getTopicLength = async () => {
  return (await topicModel.findAll()).length
}



module.exports = topicDao;