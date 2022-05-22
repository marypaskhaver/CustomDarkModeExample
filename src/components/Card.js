import React from 'react';

// Components
import {View} from 'react-native';

// Hooks
import {useTheme} from '@react-navigation/native';

export default Card = ({children}) => {
  const {dark, colors} = useTheme();

  return (
    <View
      style={{
        padding: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: dark ? 'white' : 'gray',
        shadowOpacity: 0.1,
        shadowOffset: {height: 5},
        width: 300,
        backgroundColor: colors.background,
      }}>
      {children}
    </View>
  );
};
