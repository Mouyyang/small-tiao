const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  try{
    let data = []
    await db.collection('product_sort').aggregate()
            .lookup({
              from: 'product',
              localField: '_id',
              foreignField: 'sortId',
              as: 'product'
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
}