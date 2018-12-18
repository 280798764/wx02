/**
 * mixins
 */
const TOAST_DURATION = 1500;
const TOAST_ICON_SUCCESS = "success";
const TOAST_ICON_ERROR = "error";
const TOAST_ICON_NONE = "none";
export default {
  data() {
    return {};
  },
  methods: {
    showToast(title) {
      this.baseToast(title, TOAST_ICON_NONE);
    },
    showSuccessToast(title) {
      this.baseToast(title, TOAST_ICON_SUCCESS);
    },
    showErrorToast(title) {
      this.baseToast(title, TOAST_ICON_ERROR);
    },
    baseToast(title, icon) {
      wx.showToast({
        title: title,
        icon: icon,
        duration: TOAST_DURATION,
        mask: true
      });
    },
    showActionSheet(list) {
      return new Promise((resolve, reject) => {
        wx.showActionSheet({
          itemList: list,
          success(res) {
            resolve(res);
          },
          fail(res) {
            reject(res);
          }
        });
      });
    }
  }
};
