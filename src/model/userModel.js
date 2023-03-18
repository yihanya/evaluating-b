const { Sequelize } = require('sequelize');
const dbUtile = require('../utile/db')
const db = dbUtile.newDataBase()
let userModel = db.define('user', {
  //用户id
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  //用户名
  user_name: {
    type: Sequelize.STRING(25),
    allowNull: true,
  },
  //用户密码
  pass_word: {
    type: Sequelize.STRING(25),
    allowNull: true,
  },
  //头像
  head_portrait: {
    type: Sequelize.STRING(240),
  },
  //个性签名
  personal_signature: {
    type: Sequelize.STRING(500),
  },
  //邮箱
  mail_box: {
    type: Sequelize.STRING(25),
  },
  //电话
  telephone: {
    type: Sequelize.STRING(25),
  },
  //尝试数量
  attempt_number: {
    type: Sequelize.INTEGER,
  },
  //通过数量
  adopt_number: {
    type: Sequelize.INTEGER,
  },
  //性别
  gender: {
    type: Sequelize.STRING(2),
  },
  //地址
  address: {
    type: Sequelize.STRING(25),
  }
})

module.exports = userModel;