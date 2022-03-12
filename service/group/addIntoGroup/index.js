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
      let members = []
      let guide = 0
      let groupId = typeof event.groupId === 'number' ? event.groupId : parseInt(event.groupId) 
      await db.collection('group').where({
          groupId
      }).get().then(res=>{
          members = res.data[0].member
          guide = res.data[0].guide
      }).catch(res=>{
          console.log(res);
      })
      if (guide === wxContext.OPENID){
          return {
              success: false,
              msg: "不能加入自己创建的班级"
          }
      }
      if (!members.includes(wxContext.OPENID)){
          await db.collection('group').where({
              groupId
          }).update({
              data: {
                  member: $.push([wxContext.OPENID])
              }
          }).then(res=>{
              console.log(res);
          }).catch(res=>{
              console.log(res);
          })
      }else {
          return {
              success: false,
              msg: "已加入当前班级"
          }
      }
    return {
        success: true
    };
  }catch (e) {
    return {
        success: false,
        errMsg: e,
        errorCode: 500
    };
  }
}
