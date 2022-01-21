const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  // 获取基础信息
  try{
    let data = []
    if (event.id === -1){
        await db.collection('stadium').get()
        .then(res=>{
            data = res.data
        })
    }else {
        await db.collection('stadium').doc(event.id + '').get()
        .then(res=>{
            data = res.data
        })
    }
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
}