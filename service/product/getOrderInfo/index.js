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
    let data = null
    await db.collection('order').doc(event.id).get().then(res=>{
      data = res.data
    })
    await db.collection('product').doc(data.productId).get()
        .then(res=>{
          data.product = res.data
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
}