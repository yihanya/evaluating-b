//数据库工具类
const dbUtile = require('../utile/db')
//获取数据库链接
let db = dbUtile.newDataBase();
//用户dao层
let tagDao = {}
//用户模型
const tagModel = require("../model/tagModel")
//dao层实现

tagDao.addTag = async (tagObj) => {
  let addInfo = await tagModel.create(tagObj)
  return addInfo;
}
tagDao.getAllTag = async () => {
  let allTag = tagModel.findAll()
  return allTag;
}
tagDao.getTagItem = async (type, field) => {
  let tagItem = {};
  [tagItem,] = await db.query(`select * from tags where ${type} = ${'"' + field + '"'}`)
  return tagItem[0]
}
tagDao.getTagPage = async (page, limit) => {

  let allTag = tagModel.findAll({
    offset: (page - 1) * limit,
    limit: (limit - 0)
  })
  return allTag;
}
tagDao.getTagLength = async () => {
  return (await tagModel.findAll()).length
}
module.exports = tagDao;