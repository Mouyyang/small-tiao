const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    let {id} = event
    try{
        let data = {}
        await db.collection('map').where({
            _id: id,
            _openid: wxContext.OPENID
        }).get().then(res=>{
            data = res.data[0]
        })
        await db.collection('map').where({
            _id: id,
            _openid: wxContext.OPENID
        }).remove().then(res=>{
           console.log(res)
        })
        if (data.pattern === "GUIDE" && data.groupId){
            await db.collection('group').where({
                groupId: data.groupId,
                guide: wxContext.OPENID
            }).remove().then(res=>{
                console.log(res)
            })
        }
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
