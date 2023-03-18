
const Router = require("koa-router");
const sampleRouter = new Router();
const sampleService = require("../service/sampleService")
const bodyParser = require('koa-bodyparser');
const logsFile = require("../utile/logs.js").logHandle

//接口
sampleRouter.use(bodyParser())

/**
 * 
 * @api {post} /sample/add-sample 新增样例
 * @apiName 新增样例
 * @apiGroup 样例(sample)
 * @apiDescription  返回样例信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} sampleTitle=''  样例标题
 * @apiParam {String} sampleText=''  样例内容
 * @apiParamExample  {type} Request-Example:
 * {
 *     sampleTitle:"第一次发样例",
 *     sampleText:"暂无.",
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 样例信息
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
sampleRouter.post('/add-sample', async (ctx) => {
  let returnData = { code: "200", msg: "新增成功", data: "" };
  let sampleData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await sampleService.addSample(sampleData);
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
 * @api {put} /sample/up-sample 修改样例
 * @apiName 修改样例
 * @apiGroup 样例(sample)
 * @apiDescription  返回样例信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} sampleId=''  样例id
 * @apiParam {String} sampleText=''  样例内容
 * @apiParamExample  {type} Request-Example:
 * {
 *     sampleId:"12",
 *     sampleText:"暂无.",
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 样例信息
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

sampleRouter.post('/up-sample', async (ctx) => {
  let returnData = { code: "200", msg: "修改成功", data: "" };
  let sampleData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await sampleService.upSample(sampleData);
    
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
 * @api {get} /sample/get-sample-item 获取样例内容
 * @apiName 获取样例内容
 * @apiGroup 样例(sample)
 * @apiDescription  返回样例信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} sampleId='1'  样例标题
 * @apiParamExample  {type} Request-Example:
 * {
 *     sampleId:"第一次发样例",
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 样例信息
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
sampleRouter.post('/get-sample-item', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let sampleData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await sampleService.getSampleItem(sampleData);
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
 * @api {get} /sample/get-all-sample 获取所有样例
 * @apiName 获取所有样例
 * @apiGroup 样例(sample)
 * @apiDescription  返回样例信息
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 样例信息
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
sampleRouter.post('/get-all-sample', async (ctx) => {
  let returnData = { code: "200", msg: "发布成功", data: "" };
  let sampleData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await sampleService.getAllSample(sampleData);
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
 * @api {get} /sample/get-sample-page 分页样例
 * @apiName 分页样例
 * @apiGroup 样例(sample)
 * @apiDescription  返回样例列表
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     page:1,
 *     limit:10,
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 样例信息
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
sampleRouter.get('/get-sample-page', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let sampleData = ctx.request.query;
  console.log("******************************************************");
  try {
    //执行业务
    let serviceData = await sampleService.getSamplePage(sampleData);
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
 * @api {get} /sample/get-sample-length 获取数据库样例数量
 * @apiName 样例数量
 * @apiGroup 样例(sample)
 * @apiDescription  返回样例数量
 * @apiVersion  1.0.0
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 * 
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 样例信息
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
sampleRouter.get('/get-sample-length', async (ctx) => {
  let returnData = { code: "200", msg: "获取成功", data: "" };
  let sampleData = ctx.request.query;
  console.log("******************************************************");
  try {
    //执行业务
    let serviceData = await sampleService.getSampleLength();
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

module.exports = sampleRouter;