module.exports = {
    async addMap({mapList, memo, pattern, groupId}){
        return await wx.cloud.callFunction({
            name: 'map',
            data: {
                type: "addMap",
                mapList,
                memo: memo || '',
                pattern: pattern || "SELF",
                groupId
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
    async updateMap({id, updateInfo: {mapList, memo}}) {
        return await wx.cloud.callFunction({
            name: 'map',
            data: {
                type: "updateMap",
                id,
                updateInfo: {
                    mapList,
                    memo
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