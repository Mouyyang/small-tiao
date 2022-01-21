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
    await db.collection('order').where({
      customer: wxContext.OPENID
    }).get().then(res=>{
      data = res.data
    })
    for(let i = 0; i < data.length;i++){
      let product = null
      await db.collection('product').doc(data[i].productId).get()
        .then(res=>{
          product = res.data
        })
      data[i].product = product
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