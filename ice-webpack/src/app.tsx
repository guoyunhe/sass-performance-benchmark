import { runApp, IAppConfig } from 'ice';
import '@alifd/next/index.scss';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
};

runApp(appConfig);
