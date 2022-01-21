const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  try{
    const wxContext = cloud.getWXContext();
    let {mapList, memo, pattern, groupId} = event
    let date = new Date()
    switch (pattern) {
      case "SELF":
      case "GUIDE":
        db.collection("map").add({
          data: {
            _openid: wxContext.OPENID,
            mapList,
            memo,
            pattern,
            groupId,
            createTime: date,
            modifyTime: date
          }
        })
        break
      default:
        throw new Error("")
    }
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

};