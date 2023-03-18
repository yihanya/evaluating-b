const topicDao = require('../dao/topicDao');
const topicAndTagDao = require('../dao/topicAndTagDao');
const sampleDao = require('../dao/sampleDao');
const tagDao = require('../dao/tagDao')
const logsFile = require("../utile/logs.js").logHandle
let topicService = {};

topicService.addTopic = async (topicData) => {
  let returnData = { data: null, code: "200", msg: "发布成功" };
  //执行
  try {
    // console.log(topicData);
    //执行数据库
    topicData.topicInfo.topic_ac = 0
    topicData.topicInfo.topic_sub = 0
    topicData.topicInfo.topic_review = 0;
    returnData.data = await topicDao.addTopic(topicData.topicInfo);
    //添加标签
    for (i in topicData.tagArr) {
      let topicAndTag = {
        tag_id: topicData.tagArr[i].tagId,
        topic_id: returnData.data.dataValues.topic_id
      }
      topicAndTagDao.addTopicAndTag(topicAndTag)
    }
    //添加样例
    for (i in topicData.samplesArr) {
      topicData.samplesArr[i].topicId = returnData.data.dataValues.topic_id
      sampleDao.addSample(topicData.samplesArr[i])
    }
  } catch (error) {
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
    console.log(error);
  }
  return returnData;
}

topicService.upTopic = async (topicData) => {
  let returnData = { data: null, code: "200", msg: "发布成功" };
  //执行
  try {
    // console.log(topicData);
    //执行数据库
    returnData.data = await topicDao.upTopic(topicData.topicInfo);
    //添加标签
    for (i in topicData.tagArr) {
      let topicAndTag = {
        tag_id: topicData.tagArr[i].tagId,
        topic_id: returnData.data.dataValues.topic_id
      }
      topicAndTagDao.addTopicAndTag(topicAndTag)
    }
    //添加样例
    for (i in topicData.samplesArr) {
      topicData.samplesArr[i].topicId = returnData.data.dataValues.topic_id
      sampleDao.addSample(topicData.samplesArr[i])
    }
  } catch (error) {
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
    console.log(error);
  }
  return returnData;
}

topicService.getAllTopic = async () => {
  let returnData = { data: null, code: "200", msg: "获取所有题目" };
  //执行数据库
  try {
    returnData.data = await topicDao.getAllTopic();
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}
topicService.getTopicItem = async (topicData) => {
  let returnData = { data: null, code: "200", msg: "获取题目信息" };
  try {
    //执行数据库
    returnData.data = await topicDao.getTopicItem("topic_id", topicData.topicId);
    //获取该题目的样例
    returnData.data.sampleArr = await sampleDao.getTopicAndSampleItem(topicData.topicId);
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

topicService.getTopicPage = async (topicData) => {
  let returnData = { data: null, code: "200", msg: "获取题目信息" };
  try {
    //审核 未审核 条件
    //执行数据库
    returnData.data = await topicDao.getTopicPage(topicData.page, topicData.limit);
    for (i in returnData.data) {
      //根据id获取题目标签
      returnData.data[0].dataValues.tag_arr = []
      tagAndTopicArr = await topicAndTagDao.topicAndTagSearch('topic_id', returnData.data[0].dataValues.topic_id)
      for (j in tagAndTopicArr) {
        returnData.data[0].dataValues.tag_arr.push(await tagDao.getTagItem('tag_id', tagAndTopicArr[j].tag_id))
      }
      //根据id获取题目样例
      returnData.data[0].dataValues.samples_arr = await sampleDao.sampleSearch('topic_id', returnData.data[0].dataValues.topic_id)
    }
  } catch (error) {
    console.log("************错误*************");
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

topicService.getTopicLength = async () => {
  let returnData = { data: null, code: "200", msg: "获取题目数量" };
  try {
    //执行数据库
    returnData.data = await topicDao.getTopicLength();
  } catch (error) {
    console.log(error);
    returnData.code = "601";
    returnData.msg = "执行dao发生异常"
    logsFile("执行dao发生异常");
  }
  return returnData;
}

module.exports = topicService;