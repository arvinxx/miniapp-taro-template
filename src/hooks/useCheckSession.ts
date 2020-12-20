import Taro from '@tarojs/taro';
import { useUserLogout, useWechatPreLogin } from '@/services';

let wxSessionValid; // 微信session_key的有效性判断

/**
 * 检查有效性的 hooks
 */
export const useCheckSession = () => {
  const wechatPreLogin = useWechatPreLogin();
  const logout = useUserLogout();

  /**
   * 用户检查有效性
   * @param func 获取 userInfo 之后的执行函数
   */
  return async (func = () => {}) => {
    try {
      await Taro.checkSession();
      wxSessionValid = true;
      console.log('session 有效请求用户信息');

      // 待获取用户信息
      // getUserInfo

      func();
    } catch (e) {
      if (!wxSessionValid) {
        console.log('session 失效 发起登录');
        logout();
        await wechatPreLogin();
        func();
      }
    }
  };
};
