import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import App from './App';
import Background from './components/Background';
import { store, persistor } from './store';

export default function AppIndex() {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#22202C" />
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </SafeAreaView>
      </Provider>
    </Background>
  );
}
