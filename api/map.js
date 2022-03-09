module.exports = {
    async addMap({mapList, memo, pattern}){
        return await wx.cloud.callFunction({
            name: 'map',
            data: {
                type: "addMap",
                mapList,
                memo: memo || '',
                pattern: pattern || "SELF"
            }
        }).then(res => res.result)
    },
    async deleteMap({id}){
        return await wx.cloud.callFunction({
            name: 'map',
            data: {
                type: "deleteMap",
                id
            }
        }).then(res => res.result)
    },
    // groupId为班级id号，id为group表中对应的groupId，而不是_id
    // time表示时间，createTime、modifyTime创建记录时间和更改记录时间
    async updateMap({id, updateInfo: {mapList, memo,time, groupId}}) {
        return await wx.cloud.callFunction({
            name: 'map',
            data: {
                type: "updateMap",
                id,
                updateInfo: {
                    mapList,
                    memo,
                    time,
                    groupId
                }
            }
        }).then(res => res.result)
    },
    async getMap({pattern} = {}){
        return await wx.cloud.callFunction({
            name: 'map',
            data: {
                type: "getMap",
                pattern: pattern || "SELF",
            }
        }).then(res => res.result)
    }
}
