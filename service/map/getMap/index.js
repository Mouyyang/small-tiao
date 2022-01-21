const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    const $ = db.command.aggregate
    let data = []
    try{
        let {pattern} = event
        switch(pattern){
            case "SELF":
                await db.collection('map').where({
                    pattern,
                    _openid: wxContext.OPENID
                }).get().then(res=>{
                    console.log(res)
                    data = res.data
                })
                break
            case "GUIDE":
                let maps = []
                // lookup为一对多，而此处为一对一
                await db.collection('map').where({
                    pattern,
                    _openid: wxContext.OPENID
                }).get().then(res=>{
                    maps.push(res.data)
                })
                for(let i = 0;i < maps[0].length;i++){
                    await db.collection('group').where({
                        groupId: maps[0][i].groupId
                    }).get().then(res=>{
                        data.push(Object.assign(maps[0][i], {
                            groupInfo: res.data[0]
                        }))
                    })
                }
                break
            case "VISITOR":
                let openid = wxContext.OPENID
                let allGroup = []
                await db.collection('group').aggregate()
                    .project({
                        groupId: true,
                        included: $.in([openid, '$member'])
                    }).end().then(res=>{
                        allGroup = res.list
                    })
                let resGroup = allGroup.filter(item => item.included)
                for(let i = 0;i < resGroup.length;i++){
                    await db.collection('map').where({
                        groupId: resGroup[i].groupId
                    }).get().then(res=>{
                        let groupInfo = resGroup[i]
                        groupInfo.memeber = null
                        data.push(Object.assign(res.data[0], {
                            groupInfo: groupInfo
                        }))
                    })
                }
                break
        }
        return {
            success: true,
            data
        }
    }catch(e){
        return {
            success: false,
            errMsg: e,
            errorCode: 500
        }
    }
}