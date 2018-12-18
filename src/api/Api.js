class Request {

  defaultRequest(requestParam, isShowLoading, method) {
    this.showLoading(isShowLoading);
    let _this = this;
    return new Promise((resolve, reject) => {
      wx.request({
        // url: config[store.state.domain].apiPath + "/",
        url: "https://api.i5sesol.com/cgi/",
        header: {},
        dataType: "json",
        method: method,
        data: requestParam,
        success(res) {
          resolve(_this.handleSuccess(res));
        },
        fail(err) {
          reject(_this.handleFail(err));
        }, complete() {
          _this.hideLoading(isShowLoading);
        }
      });
    });
  }

  handleFail(err) {
    let backInfo = {};
    backInfo.isSuccess = false;
    // backInfo.message = err.statusText;
    backInfo.message = "服务器连接失败";
    // todo 处理错误码，封装到backInfo的message，直接进行提示
    console.info(JSON.stringify(err));
    return backInfo;
  }

  handleSuccess(res) {
    console.info(JSON.stringify(res.data));
    let backInfo = {};
    if (res.data.error != null && res.data.error !== {}) {
      backInfo.isSuccess = false;
      backInfo.message = res.data.error.errorInfo;
      return backInfo;
    } else {
      backInfo.isSuccess = true;
      backInfo.content = res.data;
      backInfo.response = res.data.response;
      return backInfo;
    }
  }

  post(cmd, parameters, isShowLoading) {
    return this.defaultRequest(this.configParams(cmd, parameters), isShowLoading || true, "POST");
  }


  postList(cmd, parameters, pageInfo, callback, isShowLoading) {
    return this.defaultRequest(this.configParams(cmd, parameters, pageInfo), isShowLoading || true, callback, "POST");
  }

  configParams(cmd, parameters, pageInfo) {
    let requestParams = {};
    requestParams.cmd = cmd || "";
    requestParams.parameters = parameters || {};
    // requestParams.token = store.state.account.token || "";
    Object.assign(requestParams, pageInfo);
    console.log(JSON.stringify(requestParams));
    return requestParams;
  }

  showLoading(isShowLoading) {
    if (isShowLoading) {
      wx.showLoading({ title: "加载中...", mask: true });
    }
  }

  hideLoading(isShowLoading) {
    if (isShowLoading) {
      wx.hideLoading();
    }
  }

  // 网络请求返回格式
  backInfos = {
    //请求是否成功
    isSuccess: false,
    //请求返回原始值
    content: "",
    //请求返回截取 response 里面的值
    response: "",
    //请求失败提示
    message: ""
  };
}

export default new Request();
