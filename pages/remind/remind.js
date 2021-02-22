// pages/remind/remind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  // 打开弹窗
  onClick(e) {
    const {
      name
    } = e.currentTarget.dataset
    if (name == 'endTime') {
      if (this.data.startTime) {
        this.setData({
          timeName: name,
          pickerShow: true
        })
      }else {
        wx.showToast({
          title: '请选择开始时间',
          icon: 'none',
          duration: 2000
        })
      }
    } else {
      this.setData({
        timeName: name,
        pickerShow: true
      })
    }
  },
  // 关闭弹窗
  onClose() {
    this.setData({
      pickerShow: false
    })
  },
    // 选择时间
    onConfirm(e) {
    
        this.setData({
          'formObj.gmtBegin': this.timestampToTime(e.detail),
          gmtBegin: e.detail,
          pickerShow: false
        });
      
    },

     timestampToTime (timestamp){
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      return Y + M + D + h + m;
    },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})