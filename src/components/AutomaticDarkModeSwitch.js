import React, {useState} from 'react';

// Components
import {Switch} from 'react-native';

// Hooks
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// Redux
import store from '../redux/store';
import {updateChosenOverrideThemeID} from '../redux/actions/themesActions';
import {selectChosenOverrideThemeID} from '../redux/reducers/themesReducer';

import getThemeIDFromTheme from '../utils/getThemeIDFromTheme';

export default AutomaticDarkModeSwitch = () => {
  const initialEnabledness = useSelector(selectChosenOverrideThemeID) === null;
  const [isEnabled, setIsEnabled] = useState(initialEnabledness);
  const themeFromStoreID = getThemeIDFromTheme(useTheme());

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);

    if (!isEnabled) {
      // Switch was switched on; enable automatic dark mode
      store.dispatch(updateChosenOverrideThemeID(null));
    } else {
      // Switch was turned off; disable automatic dark mode
      store.dispatch(updateChosenOverrideThemeID(themeFromStoreID));
    }
  };

  return (
    <Switch
      thumbColor={'white'}
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={{marginLeft: 'auto'}}></Switch>
  );
};
