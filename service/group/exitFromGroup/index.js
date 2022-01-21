const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  // 获取基础信息
  const wxContext = cloud.getWXContext();
  const $ = db.command
  try{
    await db.collection('group').where({
        groupId: event.groupId
    }).update({
        data: {
            member: $.pullAll([wxContext.OPENID])
        }
    })
    return {
        success: true
    };
  }catch (e) {
    return {
        success: false,
        errMsg: e,
        errorCode: 500
    };
  }    
}