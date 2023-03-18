//数据库工具类
const dbUtile = require('../utile/db')
//获取数据库链接
let db = dbUtile.newDataBase();
//用户dao层
let topicAndTagDao = {}
//用户模型
const topicAndTagModel = require("../model/topicAndTagModel")
//工具类 
const utile = require("../utile/index.js")

//dao层实现
topicAndTagDao.addTopicAndTag = async (topicAndTagObj) => {
  topicAndTagObj = utile.humpToUnderline(topicAndTagObj)
  let addInfo = await topicAndTagModel.create(topicAndTagObj)
  return addInfo;
}
topicAndTagDao.getAllTopicAndTag = async () => {
  let allTag = topicAndTagModel.findAll()
  return allTag;
}
topicAndTagDao.topicAndTagSearch = async (type, field) => {
  let topicAndTagItem = {};
  [topicAndTagItem,] = await db.query(`select * from topic_tags where ${type} = ${'"' + field + '"'}`)
  return topicAndTagItem
}
topicAndTagDao.getTopicAndTagPage = async (page, limit) => {
  let allTag = topicAndTagModel.findAll({
    offset: (page - 1) * limit,
    limit: (limit - 0)
  })
  return allTag;
}
topicAndTagDao.getTopicAndTagLength = async () => {
  return (await topicAndTagModel.findAll()).length
}
module.exports = topicAndTagDao;