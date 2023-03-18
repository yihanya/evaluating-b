const sampleDao = require('../dao/sampleDao');
const logsFile = require("../utile/logs.js").logHandle
let sampleService = {};

sampleService.addSample = async (sampleData) => {
  let returnData = { data: null, code: "200", msg: "新增成功" };
  //执行
  try {
    // console.log(sampleData);
    //执行数据库
    returnData.data = await sampleDao.addSample(sampleData);
    //循环添加标签-样例

  } catch (error) {
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

sampleService.upSample = async (sampleData) => {
  let returnData = { data: null, code: "200", msg: "新增成功" };
  //执行
  try {
    // console.log(sampleData);
    //执行数据库
    returnData.data = await sampleDao.upSample(sampleData);
    console.log('sampleService 29 ***********************');
    console.log(sampleData);
  } catch (error) {
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

sampleService.getAllSample = async () => {
  let returnData = { data: null, code: "200", msg: "获取所有样例" };
  //执行数据库
  try {
    returnData.data = await sampleDao.getAllSample();
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}
sampleService.getSampleItem = async (sampleData) => {
  let returnData = { data: null, code: "200", msg: "获取样例信息" };
  try {
    //执行数据库
    returnData.data = await sampleDao.getSampleItem("sample_id", sampleData.sampleId);
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

sampleService.getTopicAndSampleItem = async (topicId) => {
  let returnData = { data: null, code: "200", msg: "获取样例信息" };
  try {
    //执行数据库
    returnData.data = await sampleDao.getTopicAndSampleItem("topicId", topicId);
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

sampleService.getSamplePage = async (sampleData) => {
  let returnData = { data: null, code: "200", msg: "获取样例信息" };
  try {
    //执行数据库

    returnData.data = await sampleDao.getSamplePage(sampleData.page, sampleData.limit);
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

sampleService.getSampleLength = async () => {
  let returnData = { data: null, code: "200", msg: "获取样例数量" };
  try {
    //执行数据库
    returnData.data = await sampleDao.getSampleLength();
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

module.exports = sampleService;