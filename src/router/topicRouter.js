
const Router = require("koa-router");
const topicRouter = new Router();
const topicService = require("../service/topicService")
const bodyParser = require('koa-bodyparser');
const logsFile = require("../utile/logs.js").logHandle

//接口
topicRouter.use(bodyParser())

/**
 * 
 * @api {post} /topic/add-topic 发布题目
 * @apiName 发布题目
 * @apiGroup 题目(topic)
 * @apiDescription  返回题目信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} topicTitle=''  题目标题
 * @apiParam {String} topicText=''  题目内容
 * @apiParamExample  {type} Request-Example:
 * {
 *     topicTitle:"第一次发题目",
 *     topicText:"暂无.",
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 题目信息
 * @apiSuccess {String} msg  发布成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "发布成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
topicRouter.post('/add-topic', async (ctx) => {
  let returnData = { code: "200", msg: "发布成功", data: "" };
  let topicData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await topicService.addTopic(topicData);
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})

/**
 * 
 * @api {put} /topic/up-topic 修改题目
 * @apiName 发布题目
 * @apiGroup 题目(topic)
 * @apiDescription  返回题目信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} topicTitle=''  题目标题
 * @apiParam {String} topicText=''  题目内容
 * @apiParamExample  {type} Request-Example:
 * {
 *     topicTitle:"第一次发题目",
 *     topicText:"暂无.",
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 题目信息
 * @apiSuccess {String} msg  发布成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "发布成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
topicRouter.put('/up-topic', async (ctx) => {
  let returnData = { code: "200", msg: "发布成功", data: "" };
  let topicData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await topicService.upTopic(topicData);
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})

/**
 * 
 * @api {get} /topic/get-topic-item 根据id获取一个题目
 * @apiName 获取题目内容
 * @apiGroup 题目(topic)
 * @apiDescription  返回题目信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} topicId='1'  题目标题
 * @apiParamExample  {type} Request-Example:
 * {
 *     topicId:"第一次发题目",
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 题目信息
 * @apiSuccess {String} msg  获取成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "获取成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
topicRouter.post('/get-topic-item', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let topicData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await topicService.getTopicItem(topicData);
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})

/**
 * 
 * @api {get} /topic/get-all-topic 获取所有题目
 * @apiName 获取所有题目
 * @apiGroup 题目(topic)
 * @apiDescription  返回题目信息
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 题目信息
 * @apiSuccess {String} msg  获取成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "获取成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
topicRouter.post('/get-all-topic', async (ctx) => {
  let returnData = { code: "200", msg: "发布成功", data: "" };
  let topicData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await topicService.getAllTopic(topicData);
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})

/**
 * 
 * @api {get} /topic/get-topic-page 分页题目
 * @apiName 分页题目
 * @apiGroup 题目(topic)
 * @apiDescription  返回题目列表
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     page:1,
 *     limit:10,
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 题目信息
 * @apiSuccess {String} msg  获取成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "获取成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
topicRouter.get('/get-topic-page', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let topicData = ctx.request.query;
  try {
    //执行业务
    let serviceData = await topicService.getTopicPage(topicData);
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})


/**
 * 
 * @api {get} /topic/get-topic-length 获取数据库题目数量
 * @apiName 题目数量
 * @apiGroup 题目(topic)
 * @apiDescription  返回题目数量
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 * 
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 题目信息
 * @apiSuccess {String} msg  获取成功
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  msg: "获取成功"
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 * 
 */
topicRouter.get('/get-topic-length', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let topicData = ctx.request.query;
  console.log("******************************************************");
  try {
    //执行业务
    let serviceData = await topicService.getTopicLength();
    returnData.data = serviceData.data;
    returnData.code = serviceData.code;
    returnData.msg = serviceData.msg;
  } catch (error) {
    console.log(error);
    returnData.code = '600'
    returnData.msg = '执行业务发生异常';
    logsFile("执行业务发生异常")
  }
  ctx.body = returnData;
})

module.exports = topicRouter;