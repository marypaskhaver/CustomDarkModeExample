import React from 'react';

// Components
import {NavigationContainer} from '@react-navigation/native';

// Constants
import {DARK_MODE_OVERRIDE_OPTIONS} from '../constants/darkModeOverrideOptions';

// Hooks
import {useSelector} from 'react-redux';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';

// Redux
import {
  selectCurrentAppTheme,
  selectChosenOverrideThemeID,
} from '../redux/reducers/themesReducer';
import {updateCurrentPhoneTheme} from '../redux/actions/themesActions';
import getThemeFromScheme from '../utils/getThemeFromScheme';

export default ThemedNavigationContainer = ({children}) => {
  const scheme = useColorScheme();
  const currentAppTheme = useSelector(selectCurrentAppTheme);
  const chosenOverrideThemeID = useSelector(selectChosenOverrideThemeID);

  const currentPhoneTheme = getThemeFromScheme(scheme);

  updateCurrentPhoneTheme(currentPhoneTheme);

  // - If chosenOverrideThemeID exists, that means auto dark mode is DISABLED,
  //    so set the theme to the user's currentAppTheme.
  // - If chosenOverrideThemeID DOES NOT exist, auto dark mode is ENABLED,
  //    so set the theme to the user's currentPhoneTheme.

  return (
    <NavigationContainer
      theme={chosenOverrideThemeID ? currentAppTheme : currentPhoneTheme}>
      {children}
    </NavigationContainer>
  );
};
