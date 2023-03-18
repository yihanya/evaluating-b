
const Router = require("koa-router");
const ojRouter = new Router();
const ojService = require("../service/ojService")
const bodyParser = require('koa-bodyparser');
const logsFile = require("../utile/logs.js").logHandle

//接口
ojRouter.use(bodyParser())
/**
 * 
 * @api {post} /oj/run-code 运行代码
 * @apiName 执行代码
 * @apiGroup 判题机(oj)
 * @apiDescription  执行信息
 * @apiVersion  1.0.0
 * 
 * @apiParam {String} ojTitle=''  公告标题
 * @apiParamExample  {type} Request-Example:
 * {
 *     ojTitle:"第一次发公告",
 *     ojText:"暂无.",
 * }
 * 
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 执行信息
 * @apiSuccess {String} msg  执行成功
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
ojRouter.post('/run-code', async (ctx) => {
  let returnData = { code: "200", msg: "发布成功", data: "" };
  let ojData = ctx.request.body;
  try {
    //执行业务
    let serviceData = await ojService.runCode(ojData);
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



module.exports = ojRouter;