const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  // 获取基础信息
  const wxContext = cloud.getWXContext();

  let {nickName, avatarUrl} = event.userInfo.data

  let oldInfo = {}

  try{
    await db.collection('user').where({
        _openid: wxContext.OPENID
      })
      .get()
      .then(res=>{
          oldInfo = res.data
      })
    
      if (oldInfo.length === 0){
        await db.collection("user").add({
            data: {
                _openid: wxContext.OPENID,
                nickName: nickName,
                avatarUrl: avatarUrl
            }
        })
      }else {
          await db.collection("user").doc(oldInfo[0]._id).update({
              data: {
                nickName: nickName,
                avatarUrl: avatarUrl
              }
          })
      }
      return {
        success: true,
        data: event.userInfo.data
      };
  }catch(e){
    return {
        success: false,
        errMsg: e,
        errorCode: 500
    };
  }
};
