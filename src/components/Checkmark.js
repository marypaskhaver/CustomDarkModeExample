import React from 'react';

// Components
import {Image} from 'react-native';

// Constants
import {PASTEL_RED} from '../constants/colors';

export default Checkmark = () => {
  const checkmarkImage = require('../assets/checkmark.png');

  return (
    <Image
      style={{
        marginLeft: 'auto',
        width: 15,
        height: 15,
        tintColor: PASTEL_RED,
      }}
      source={checkmarkImage}
    />
  );
};
