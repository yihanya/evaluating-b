//数据库工具类
const dbUtile = require('../utile/db')
//获取数据库链接
let db = dbUtile.newDataBase();
//用户dao层
let userDao = {}
//用户模型
const userModel = require("../model/userModel")
//dao层实现
userDao.getAllUser = async () => {

}
userDao.getUser = async (type, field) => {
  let user = {};
  [user,] = await db.query(`select * from users where ${type} = ${'"' + field + '"'}`)
  return user[0]
}

userDao.addUser = async (userObj) => {
  let addUser = {
    user_name: userObj.userName,
    pass_word: userObj.passWord1,
  }
  let addInfo = await userModel.create(addUser)
  return addInfo
}
userDao.delUser = async (id) => {

}
userDao.upUser = async () => {

}
userDao.getUserPage = async (page, limit) => {
  let userList = userModel.findAll({
    offset: (page - 1) * limit,
    limit: (limit - 0)
  })
  return userList;
}

module.exports = userDao;