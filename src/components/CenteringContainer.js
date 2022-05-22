import React from 'react';

// Components
import {View} from 'react-native';

// Hooks
import {useTheme} from '@react-navigation/native';

export default CenteringContainer = ({children}) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        flex: 1,
        backgroundColor: colors.background,
      }}>
      {children}
    </View>
  );
};
