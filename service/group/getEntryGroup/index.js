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
    let openid = wxContext.OPENID
    let allGroup = []
    const $ = db.command.aggregate
    await db.collection('group').aggregate()
        .project({
            groupId: true,
            introduce: true,
            name: true,
            included: $.in([openid, '$member'])
        }).end().then(res=>{
            allGroup = res.list
        })
    let data = allGroup.filter(item => item.included)
    data.forEach(item => {
        delete item.included
    })
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