import Taro from '@tarojs/taro';

export const setJWT = (token) => Taro.setStorageSync('token', token);
export const getJWT = () => Taro.getStorageSync('token');
export const removeJWT = () => Taro.removeStorageSync('token');
