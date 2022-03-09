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
    let list = []
    await db.collection('game').where({
        _openid: wxContext.OPENID,
        item: event.item
    }).get().then(res=>{
        data = res.data
    })
    data.forEach(item => {
        list.push(item.level)
    });
    return {
        success: true,
        data: {
            totalInfo: data,
            list: list,
            item: event.item
        }
    };
  }catch(e){
    return {
        success: false,
        errMsg: e,
        errorCode: 500
    };
  }
}
