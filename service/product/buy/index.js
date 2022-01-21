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
    // 查询商品
    let price = 0
    await db.collection('product').doc(event.productId).get()
            .then(res=>{
                price += res.data.price * event.number
            })
    // 写入订单
    await db.collection('order').add({
      data: {
        productId: event.productId,
        number: event.number,
        time: new Date(),
        status: 1,
        customer: wxContext.OPENID,
        price: price
      }
    })
    // 减少库存
    await db.collection('product').doc(event.productId)
            .update({
              data: {
                stock: $.inc(-1*(event.number))
              }
            })
    return {
        success: true
    };
  }catch(e){
    return {
        success: false,
        errMsg: e,
        errorCode: 500
    };
  }
}