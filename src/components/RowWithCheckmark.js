import React from 'react';

// Components
import {Text} from 'react-native';
import {BulletPoint, Checkmark, Row} from '../components/';

// Hooks
import {useTheme} from '@react-navigation/native';

export default RowWithCheckmark = ({textToDisplay, isChecked}) => {
  const {colors} = useTheme();

  return (
    <Row>
      <BulletPoint />
      <Text style={{fontSize: 16, color: colors.text}}>{textToDisplay}</Text>
      {isChecked && <Checkmark />}
    </Row>
  );
};
