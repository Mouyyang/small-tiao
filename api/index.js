const log = require('./log')
const map = require('./map')
const group = require('./group')
const stadium = require('./stadium')
const credit = require('./credit')
const game = require('./game')
const product = require('./product')

if (wx) {
     wx.logApi = log;
     wx.mapApi = map
     wx.groupApi = group
     wx.stadiumApi = stadium
     wx.creditApi = credit
     wx.gameApi = game
     wx.productApi = product
     module.exports = wx.logApi
     module.exports = wx.mapApi
     module.exports = wx.groupApi
     module.exports = wx.stadiumApi
     module.exports = wx.creditApi
     module.exports = wx.gameApi
     module.exports = wx.productApi
}