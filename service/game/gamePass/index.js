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
    try {
        let games = []
        await db.collection('game').where({
            _openid: wxContext.OPENID,
            level: event.level,
            item: event.item
        }).get().then(res => {
            games = res.data
            console.log(res)
        })
        if (games.length >= 1) {
            // 更新通关时间
            await db.collection('game').where({
                _openid: wxContext.OPENID,
                level: event.level,
                item: event.item
            }).update({
                data: {
                    time: new Date()
                }
            })
        } else {
            // 添加记录
            await db.collection('game').add({
                data: {
                    _openid: wxContext.OPENID,
                    time: new Date(),
                    level: event.level,
                    item: event.item
                }
            })
        }
        // 添加积分项和积分
        db.collection('credit_item').add({
            data: {
                _openid: wxContext.OPENID,
                describe: `通过第${event.item + 1}个游戏，第${event.level + 1}关，获得5个积分`,
                number: 5,
                time: new Date(),
                type: "GAME"
            }
        })

        let gameCredit = []
        await db.collection('credit').where({
            _openid: wxContext.OPENID
        }).get().then(res => {
            gameCredit = res.data
        })
        if (gameCredit.length === 0){
            await db.collection('credit').add({
                data: {
                    _openid: wxContext.OPENID,
                    number: 5
                }
            })
        }else {
            await db.collection('credit').where({
                _openid: wxContext.OPENID
            }).update({
                data: {
                    number: $.inc(5)
                }
            }).then(res => {
                console.log(res)
            })
        }
        return {
            success: true
        };
    } catch (e) {
        return {
            success: false,
            errMsg: e,
            errorCode: 500
        };
    }
}
