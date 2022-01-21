const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  try{
    let data = []
    await db.collection('group').aggregate().project({
        groupId: true,
        introduce: true,
        name: true
    }).end().then(res=>{
        data = res.list
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