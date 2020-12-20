import React, { FC } from 'react';
import { View, Text } from '@tarojs/components';
import { Loading } from '@/components';

import styles from './style.less';

const Home: FC = () => {
  return (
    <View className={styles.container}>
      <Text>Hello world!</Text>
      <Loading loading />
    </View>
  );
};

export default Home;
