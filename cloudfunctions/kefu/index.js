// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {

  const wxContext = cloud.getWXContext()

  let contentType = event.MsgType == 'text' ? '文字' : event.MsgType == 'image' ? '图片' : event.MsgType == 'miniprogrampage' ? '小程序页面' : '不明信息'

  await cloud.openapi.customerServiceMessage.send({
    touser: wxContext.OPENID,
    msgtype: 'text',
    text: {
      content: '您的' + contentType + '消息已收到！',
    },
  })

  return 'success'
}