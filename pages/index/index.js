//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // 开启转发权限
    wx.showShareMenu({
      withShareTicket: true
    })
    
    wx.updateShareMenu({
      withShareTicket: true,
      success (res) {       }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getStorage (e) {
    wx.getStorage({
      key: 'userName',
      success (res) {
        console.log(res.data)
      }
    })
  },
  setStorage (e) {
    wx.setStorage({
      key:"userName",
      data:"waldon"
    })
  },
  gotoTest () {
    wx.navigateTo({
      url: '../test/test'
    })
  },
  showX () {
    console.log(`测试冒泡`)
    const vm = this
    wx.getLocation({
      success (res) {
        vm.motto = res
      }
    })
    wx.getSystemInfo({
      success (res) {
        console.log(res)
      }
    })
  },
  uploadImg () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
    })
  },
  choseLocate () {
    wx.chooseLocation({
      success (res) {
      }
    })
  }
})
