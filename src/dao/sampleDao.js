//数据库工具类
const dbUtile = require('../utile/db')
//获取数据库链接
let db = dbUtile.newDataBase();
//样例dao层
let sampleDao = {}
//样例模型
const sampleModel = require("../model/sampleModel")
//工具类 
const utile = require("../utile/index.js")

//dao层实现
sampleDao.addSample = async (sampleObj) => {
  let addInfo = await sampleModel.create(utile.humpToUnderline(sampleObj))
  return addInfo;
}

sampleDao.upSample = async (sampleObj) => {
  let upInfo = await sampleModel.update(utile.humpToUnderline(sampleObj), { where: { sample_id: sampleObj.sampleId }})
  return upInfo;
}


sampleDao.getAllSample = async () => {
  let allSample = sampleModel.findAll()
  return allSample;
}

sampleDao.sampleSearch = async (type, field) => {
  let sampleItem = {};
  [sampleItem,] = await db.query(`select * from samples where ${type} = ${'"' + field + '"'}`)
  return sampleItem
}

sampleDao.getSamplePage = async (page, limit) => {
  let allSample = sampleModel.findAll({
    offset: (page - 1) * limit,
    limit: (limit - 0)
  })
  return allSample;
}

sampleDao.getSampleLength = async () => {
  return (await sampleModel.findAll()).length
}

sampleDao.getTopicAndSampleItem = async (topicId) => {
  return [sampleItem,] = await db.query(`select * from samples where topic_id = ${topicId}`)
}

module.exports = sampleDao;