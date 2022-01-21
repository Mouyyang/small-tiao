module.exports = {
    async getShareableGroup(){
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "getShareableGroup"
            }
        }).then(res => res.result)
    },
    async getManageGroup(){
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "getManageGroup"
            }
        }).then(res => res.result)
    },
    async getManagerGroupDetailInfo({groupId}){
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "getManagerGroupDetailInfo",
                groupId
            }
        }).then(res => res.result)
    },
    async getEntryGroup(){
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "getEntryGroup"
            }
        }).then(res => res.result)
    },
    async getAllGroup(){
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "getAllGroup"
            }
        }).then(res => res.result)
    },
    async searchGroup({key = ''} = {}){
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "searchGroup",
                key
            }
        }).then(res => res.result)
    },
    async addIntoGroup({groupId}){
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "addIntoGroup",
                groupId
            }
        }).then(res => res.result)
    },
    async exitFromGroup({groupId}){
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "exitFromGroup",
                groupId
            }
        }).then(res => res.result)
    },
    async pullVisitorFromGroup({groupId, visitorId}){
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "pullVisitorFromGroup",
                groupId,
                visitorId
            }
        }).then(res => res.result)
    }
}