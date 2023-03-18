const noticeDao = require('../dao/noticeDao');
const logsFile = require("../utile/logs.js").logHandle
let noticeService = {};

noticeService.addNotice = async (noticeData) => {
  let returnData = { data: null, code: "200", msg: "发布成功" };
  //执行
  try {
    console.log(noticeData);
    //执行数据库
    returnData.data = await noticeDao.addNotice(noticeData);
  } catch (error) {
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}
noticeService.getAllNotice = async () => {
  let returnData = { data: null, code: "200", msg: "获取所有公告" };
  //执行数据库
  try {
    returnData.data = await noticeDao.getAllNotice();
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}
noticeService.getNoticeItem = async (noticeData) => {
  let returnData = { data: null, code: "200", msg: "获取公告信息" };
  try {
    //执行数据库
    returnData.data = await noticeDao.getNoticeItem("notice_id", noticeData.noticeId);
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

noticeService.getNoticePage = async (noticeData) => {
  let returnData = { data: null, code: "200", msg: "获取公告信息" };
  try {
    //执行数据库

    returnData.data = await noticeDao.getNoticePage(noticeData.page, noticeData.limit);
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

noticeService.getNoticeLength = async () => {
  let returnData = { data: null, code: "200", msg: "获取公告数量" };
  try {
    //执行数据库
    returnData.data = await noticeDao.getNoticeLength();
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

module.exports = noticeService;