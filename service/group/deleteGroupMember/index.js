const cloud = require('wx-server-sdk');

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    const _ = db.command
    let {id} = event
    try{
        await db.collection('group').where({
            _id: id,
            guide: wxContext.OPENID
        }).update({
            data: {
                member: _.pull(event.removeId)
            }
        }).then(res=>{
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
