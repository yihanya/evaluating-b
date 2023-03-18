const adminDao = require('../dao/adminDao');
const jsonwebtoken = require('jsonwebtoken');
const SECRET = 'QfZnhkGQ%*WF9qRLgQOab31DSNZExbHntw2tkoZr&MmBSq#WWg2%Sp*7xxKwm4PP1sGBtktj'; // 秘钥后改成生成
const logsFile = require("../utile/logs.js").logHandle
let adminService = {};

adminService.adminLogin = async (adminData) => {
  let returnData = { data: null, code: "", msg: "" };
  //执行
  try {
    //执行数据库
    returnData.data = await adminDao.getAdmin("admin_name", adminData.adminName);
    if (returnData.data.admin_password == undefined) {
      logsFile("找不到该管理员");
      return { code: "700", msg: "找不到该管理员", data: null }
    }
    if (adminData.adminPassword == returnData.data.admin_password) {

      if (adminData.authority == returnData.data.authority) {
        returnData.code = "200";
        returnData.msg = "登陆成功"
        returnData.data.token = jsonwebtoken.sign(
          returnData.data,  // 加密userToken
          SECRET,
          { expiresIn: '168h' }
        )
        logsFile("登陆成功");
      } else {
        returnData.code = "701";
        returnData.msg = "权限不足"
        logsFile("权限不足");
      }

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


module.exports = adminService;