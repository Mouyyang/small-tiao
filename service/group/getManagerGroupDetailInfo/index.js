const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  // 获取基础信息
  const wxContext = cloud.getWXContext();
  try{
    let data = []
    await db.collection('group').where({
        guide: wxContext.OPENID,
        groupId: event.groupId
    }).get().then(res=>{
        data = res.data[0]
    })
    let member = data.member
    let memberInfo = []
    for(let i = 0; i < member.length; i++){
        await db.collection('user').where({
            _openid: member[i]
        }).get().then(res=>{
            memberInfo.push(res.data[0])
        })
    }
    data.memberInfo = memberInfo
    return {
        success: true,
        data
    };
  }catch(e){
    return {
        success: false,
        errMsg: e,
        errorCode: 500
    };
  }
};