import React from 'react';

import {View} from 'react-native';

import {useTheme} from '@react-navigation/native';

export default Row = ({children}) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        backgroundColor: colors.background,
      }}>
      {children}
    </View>
  );
};
