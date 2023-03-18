//数据库工具类
const dbUtile = require('../utile/db')
//获取数据库链接
let db = dbUtile.newDataBase();
//用户dao层
let adminDao = {}
//用户模型
const adminModel = require("../model/adminModel")
//dao层实现

adminDao.getAdmin = async (type, field) => {

  let admin = {};
  [admin,] = await db.query(`select * from admins where ${type} = ${'"' + field + '"'}`)
  return admin[0]

}


module.exports = adminDao;