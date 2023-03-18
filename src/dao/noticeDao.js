//数据库工具类
const dbUtile = require('../utile/db')
//获取数据库链接
let db = dbUtile.newDataBase();
//用户dao层
let noticeDao = {}
//用户模型
const noticeModel = require("../model/noticeModel")
//dao层实现

noticeDao.addNotice = async (noticeObj) => {
  let addInfo = await noticeModel.create(noticeObj)
  return addInfo;
}
noticeDao.getAllNotice = async () => {
  let allNotice = noticeModel.findAll()
  return allNotice;
}
noticeDao.getNoticeItem = async (type, field) => {
  let noticeItem = {};
  [noticeItem,] = await db.query(`select * from tags where ${type} = ${'"' + field + '"'}`)
  return noticeItem[0]
}
noticeDao.getNoticePage = async (page, limit) => {
  let allNotice = noticeModel.findAll({
    offset: (page - 1) * limit,
    limit: (limit - 0)
  })
  return allNotice;
}
noticeDao.getNoticeLength = async () => {
  return (await noticeModel.findAll()).length
}
module.exports = noticeDao;