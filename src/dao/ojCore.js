//导入模块
const fileWrap = require('fs');
const shell = require('shelljs');
const sampleDao = require('./sampleDao');
//数据库工具类
const dbUtile = require('../utile/db')
//获取数据库链接
let db = dbUtile.newDataBase();
//接收数据
const ojCore = {}
ojCore.runCode = (runData) => {
  //变量声明
  let suffix = ''
  let containerId = ''
  //容器初始化
  if (runData.language == 'java') {
    suffix = '.java'
  } else if (runData.language == 'c') {
    suffix = '.c'
    //执行代码 获取输出
    shell.exec(`sudo docker run - dit gcc /bin/bash`, (code, stdout, stderr) => {
      console.log('执行代码 code: ' + code);
      console.log('执行代码 stdout: ' + stdout);
      console.log('执行代码 stderr: ' + stderr);
      containerId = stdout
    })
    // 进入容器
    shell.exec(`sudo docker attach ${containerId}`, (code, stdout, stderr) => {
      console.log('进入容器 code: ' + code);
      console.log('进入容器 stdout: ' + stdout);
      console.log('进入容器 stderr: ' + stderr);
    })
    //获取当前时间戳 用于创建文件
    let timeStamp = new Date().getTime()
    //文件名 用户id + 题目id + 时间戳
    let newFile = `./${runData.userId}${runData.topicId}${timeStamp}${suffix}`
    //文件创建
    fileWrap.writeFile(newFile, runData.code, (error) => {
      // 创建失败
      if (error) {
        console.log(`创建失败：${error}`)
      }
      // 创建成功
      console.log(`创建成功！`)
    })
    //编译代码
    shell.exec(`gcc ${newFile} -o main.out`, (code, stdout, stderr) => {
      console.log('进入容器 code: ' + code);
      console.log('进入容器 stdout: ' + stdout);
      console.log('进入容器 stderr: ' + stderr);
    })
    //获取样例数组
    let sampleArr = []
    sampleArr = sampleDao.getTopicAndSampleItem(runData.topic.topicId)
    let ansArr = []
    let returnData = {}
    //判断是否有输入样例
    if (sampleArr.length > 0) {
      for (let i in sampleArr) {
        //记录当前时间戳
        let nowTime = new Date().getTime()
        //将时间限制转换为秒
        let timeS = runData.topic.timeStamp / 1000
        //运行代码 输入数据
        shell.exec(`sudo timeout -s 9 ${timeS} ./main.out&&${sampleArr[i]}`, (code, stdout, stderr) => {
          console.log(`第${i}次结果输出:      ${stdout}`);
          console.log('error: ' + stderr);
          //获取输出或者错误
          //计算时间限制
          ansArr[i] = new Date().getTime() - nowTime
          //添加结果
        })

      }
    } else {
      //运行并获取结果
    }
    //获取结果

    //返回数据
  } else if (runData.topic.language == 'c++') {

    suffix = '.h'
  } else if (runData.topic.language == 'python') {
    suffix = '.py'
  } else if (runData.topic.language == 'js') {
    suffix = '.js'
  }


}
module.exports = ojCore;