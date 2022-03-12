const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  try{
    const wxContext = cloud.getWXContext();
    let {mapList, memo, pattern} = event
    let date = new Date()
    switch (pattern) {
      case "SELF":
        db.collection("map").add({
          data: {
            _openid: wxContext.OPENID,
            mapList,
            memo,
            pattern,
            time: date, // 默认为当前时间
            createTime: date,
            modifyTime: date
          }
        })
            break
      case "GUIDE":
        let maps = []
        await db.collection('map').where({
          _openid: wxContext.OPENID,
          pattern: "GUIDE"
        }).get().then(res=>{
          maps = res.data
        })
        if (maps.length >= 3){
          return {
            success: false,
            errMsg: "每个用户在导游模式下创建的地图或班级数不能超过3个"
          };
        }
        let groupId = new Date().getTime();
        let guide = wxContext.OPENID
        let member = []
        let name = event.name || '班级-' + groupId
        let introduce = event.introduce || '暂时未编辑简介'
        await db.collection('group').add({
          data: {
            groupId,
            guide,
            member,
            name,
            introduce
          }
        })
        db.collection("map").add({
          data: {
            _openid: wxContext.OPENID,
            mapList,
            memo,
            pattern,
            groupId,
            time: date, // 默认为当前时间
            createTime: date,
            modifyTime: date
          }
        })
        break
      default:
        throw new Error("")
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

};
