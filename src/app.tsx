import React, { useEffect } from 'react';
import { useGlobalState } from '@/models';
import './app.global.less';
import './global';

const App: (props: any) => React.ReactNode = ({ children }) => {
  const { initSystemInfo } = useGlobalState();

  useEffect(() => {
    initSystemInfo();
  }, []);

  return children;
};

export default App;
