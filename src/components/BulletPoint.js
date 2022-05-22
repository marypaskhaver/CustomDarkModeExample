import React from 'react';

// Components
import {View} from 'react-native';

// Hooks
import {useTheme} from '@react-navigation/native';

export default BulletPoint = () => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.text,
        marginRight: 12,
        marginLeft: 16,
      }}
    />
  );
};
