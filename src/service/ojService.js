const ojDao = require('../dao/ojCore');
const logsFile = require("../utile/logs.js").logHandle
let ojService = {};

ojService.runCode = async (ojData) => {
  let returnData = { data: null, code: "200", msg: "发布成功" };
  //执行
  try {
    console.log(ojData);
    //执行数据库
    returnData.data = await ojDao.runCode(ojData);
  } catch (error) {
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}


module.exports = ojService;