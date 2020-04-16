import React from 'react';
import { View, StatusBar } from 'react-native';

import Main from "./src/Main";
import colors from './assets/colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const ColoredStatusBar = ({ bgColor, ...props }) => (
  <View style={{
    width: '100%',
    height: STATUSBAR_HEIGHT,
    backgroundColor: bgColor
  }}>
    <StatusBar translucent backgroundColor={bgColor} {...props} />
  </View>
);

export default function App() {
  return (
    <>
      <ColoredStatusBar bgColor={colors["wku-primary"]} barStyle="light-content"/>
      <Main/>
    </>
  );
}
