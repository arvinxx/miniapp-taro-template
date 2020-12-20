import {} from '@tarojs/taro';

import { useStore } from 'stook';
import { StoreKey } from './storeKey';

/**
 * 一些运行的全局状态参数管理
 */
export const useUserState = () => {
  const [isLogin, setIsLogin] = useStore<boolean>(StoreKey.USER_IS_LOGIN);
  return {
    isLogin,
    serUserLogin: () => {
      setIsLogin(true);
    },
    serUserLogout: () => {
      setIsLogin(false);
    },
  };
};
