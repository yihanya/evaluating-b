
const tagDao = require('../dao/tagDao');
const logsFile = require("../utile/logs.js").logHandle
let tagService = {};

tagService.addTag = async (tagData) => {
  let returnData = { data: null, code: "200", msg: "增加成功" };
  //执行
  try {
    //执行数据库
    let tagObj = await tagDao.getTagItem("tag_name", tagData.tagName)
    // console.log(tagObj);
    if (tagObj == undefined) {
      returnData.data = await tagDao.addTag(tagData);

    }
  } catch (error) {
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}
tagService.getAllTag = async () => {
  let returnData = { data: null, code: "200", msg: "获取所有公告" };
  //执行数据库
  try {
    returnData.data = await tagDao.getAllTag();
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}
tagService.getTagItem = async (tagData) => {
  let returnData = { data: null, code: "200", msg: "获取公告信息" };
  try {
    //执行数据库
    returnData.data = await tagDao.getTagItem("tag_id", tagData.tagId);
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

tagService.getTagPage = async (tagData) => {
  let returnData = { data: null, code: "200", msg: "获取标签信息" };
  try {
    //执行数据库
    returnData.data = await tagDao.getTagPage(tagData.page, tagData.limit);
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

tagService.getTagLength = async () => {
  let returnData = { data: null, code: "200", msg: "获取公告数量" };
  try {
    //执行数据库
    returnData.data = await tagDao.getTagLength();
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

module.exports = tagService;