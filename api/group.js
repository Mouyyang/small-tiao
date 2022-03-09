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
    },
    // 修改班级信息
    async updateGroupInfo({id, updateInfo: {name, introduce}}) {
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "updateGroupInfo",
                id,
                updateInfo: {
                    name,
                    introduce
                }
            }
        }).then(res => res.result)
    },
    // 删除班级，id为group表中对应的_id，而不是groupId
    async deleteGroup({id}) {
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "deleteGroup",
                id
            }
        }).then(res => res.result)
    },
    // 删除班级中的成员
    // removeId为返回用户的openid
    // id为group表中对应的_id，而不是groupId
    async deleteGroupMember({id, removeId}) {
        return await wx.cloud.callFunction({
            name: 'group',
            data: {
                type: "deleteGroupMember",
                removeId,
                id
            }
        }).then(res => res.result)
    }
}
