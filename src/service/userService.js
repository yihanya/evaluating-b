const userDao = require('../dao/userDao');
const logsFile = require("../utile/logs.js").logHandle
const jsonwebtoken = require('jsonwebtoken');
const SECRET = 'QfZnhkGQ%*WF9qRLgQOab31DSNZExbHntw2tkoZr&MmBSq#WWg2%Sp*7xxKwm4PP1sGBtktj'; // 秘钥后改成生成
let userService = {};

userService.login = async (loginData) => {
  let returnData = { data: null, code: "", msg: "" };
  //执行
  try {
    //执行数据库
    returnData.data = await userDao.getUser("user_name", loginData.userName);
    if (returnData.data.pass_word == undefined) {
      logsFile("找不到该用户");
      return { code: "700", msg: "找不到该用户", data: null }
    }
    if (loginData.passWord == returnData.data.pass_word) {
      returnData.code = "200";
      returnData.msg = "登陆成功"
      returnData.data.token = jsonwebtoken.sign(
        returnData.data,  // 加密userToken
        SECRET,
        { expiresIn: '168h' }
      )
      logsFile("登陆成功");
    } else {
      returnData.code = "700";
      returnData.msg = "密码错误";
      logsFile("密码错误");
    }
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

userService.register = async (registerData) => {
  let returnData = { data: "", code: "", msg: "" };
  //执行
  try {
    let obj = await userDao.getUser("user_name", registerData.userName);
    if (obj == undefined) {
      //执行数据库
      await userDao.addUser(registerData);
      returnData.data = ""
      returnData.code = "200";
      returnData.msg = "注册成功"
      logsFile("注册成功");
      return returnData;
    } else {
      returnData.data = ""
      returnData.code = "700";
      returnData.msg = "注册失败"
      logsFile("注册失败");
      return returnData;
    }
  } catch (error) {
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile(error);
    logsFile("执行dao发生异常");
    return returnData;
  }
}

userService.getUserPage = async (data) => {
  let returnData = { data: null, code: "200", msg: "成功返回" };

  try {
    //执行数据库
    returnData.data = await userDao.getUserPage(data.page, data.limit);
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

module.exports = userService;