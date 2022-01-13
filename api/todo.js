module.exports = {
    async todo(){
        return await wx.cloud.callFunction({
            name: 'mine',
            data: {
              type: 'todo'
            }
        }).then(data => data.result.data)
    }
}