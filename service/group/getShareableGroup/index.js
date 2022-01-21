const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    let data = []
    try{
        await db.collection('group').where({
            guide: wxContext.OPENID
        }).get().then(res=>{
            data = res.data
        })
        return {
            success: true,
            data
        }
    }catch(e){
        return {
            success: false,
            errMsg: e,
            errorCode: 500
        };
    }
}