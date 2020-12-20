import { removeJWT, request, setJWT } from '@/utils';
import { useUserState } from '@/models/user';

export const useWechatPreLogin = () => {
  const { serUserLogin } = useUserState();
  return async () => {
    try {
      const { code, errMsg } = await Taro.login();
      if (!code) {
        console.log('登录失败！' + errMsg);
        return;
      }

      const res = await request.post(`/user/login/wechat`, { code });

      const { code: status, data } = res;
      if (status === 0) {
        serUserLogin();
        const { token } = data;
        // 保存 JWT Token 与后端服务器鉴权
        setJWT(token);
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const useUserLogout = () => {
  const { serUserLogout } = useUserState();
  return () => {
    removeJWT();
    serUserLogout();
  };
};
