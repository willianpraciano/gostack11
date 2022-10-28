import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{ flex: 1, backgroundColor: '#312e38' }} />
    </>
  );
}
