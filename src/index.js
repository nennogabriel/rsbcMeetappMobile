import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Router from './routes';
import Background from './components/Background';

export default function App() {
  return (
    <Background>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#22202C" />
        <Router />
      </SafeAreaView>
    </Background>
  );
}
