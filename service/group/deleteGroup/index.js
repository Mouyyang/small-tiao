const cloud = require('wx-server-sdk');

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    try{
        let {id} = event
        let data = {}
        await db.collection('group').doc(id).get().then(res=>{
            data = res.data
        })
        if (data === null){
            return {
                success: false
            };
        }
        db.collection('group').where({
            _id: id,
            guide: wxContext.OPENID
        }).remove().then(res=>{
            console.log(res)
        })
        db.collection('map').where({
            groupId: data.groupId,
            _openid: wxContext.OPENID
        }).remove().then(res=>{
            console.log(res)
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
