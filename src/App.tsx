import React from 'react';
import { Provider } from 'react-redux';

import { RootNavigator } from './navigators/RootNavigator';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
