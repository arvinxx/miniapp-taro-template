import { getSystemInfo, getSystemInfoSync } from '@tarojs/taro';

import { useStore } from 'stook';
import { StoreKey } from './storeKey';

/**
 * 全局状态说明
 */
export type SystemInfo = getSystemInfoSync.Result;

/**
 * 一些运行的全局状态参数管理
 */
export const useGlobalState = () => {
  const [systemInfo, setSystemInfo] = useStore<SystemInfo | undefined>(StoreKey.GLOBAL_SYSTEM_INFO);
  return {
    initSystemInfo: () => getSystemInfo().then((data) => setSystemInfo(data)),
    systemInfo,
  };
};
