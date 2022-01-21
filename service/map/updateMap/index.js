const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
    try{
        let {id, updateInfo} = event
        updateInfo.modifyTime = new Date()
        db.collection('map').doc(id).update({
            data: updateInfo
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