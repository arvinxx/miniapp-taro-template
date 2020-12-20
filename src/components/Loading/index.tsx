import React, { FC } from 'react';
import { View } from '@tarojs/components';
import styles from './style.less';

interface LoadingProps {
  loading: boolean;
}
const Loading: FC<LoadingProps> = ({ loading, children }) =>
  loading ? (
    <View className={styles.container}>
      <View className={styles.loading}>
        <View>
          <View />
        </View>
        <View>
          <View />
        </View>
        <View>
          <View />
        </View>
      </View>
    </View>
  ) : (
    <View>{children}</View>
  );

export default Loading;
