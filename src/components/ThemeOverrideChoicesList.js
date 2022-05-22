import React, {useState} from 'react';

// Components
import {FlatList} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {Line, RowWithCheckmark} from './';

// Constants
import {DARK_MODE_OVERRIDE_OPTIONS} from '../constants/darkModeOverrideOptions';

// Hooks
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

// Redux
import {selectChosenOverrideThemeID} from '../redux/reducers/themesReducer';
import store from '../redux/store';
import {updateChosenOverrideThemeID} from '../redux/actions/themesActions';

import getThemeIDFromTheme from '../utils/getThemeIDFromTheme';

export default ThemeOverrideChoicesList = () => {
  const initialChosenOverrideThemeID = useSelector(selectChosenOverrideThemeID);
  const currentPhoneThemeID = getThemeIDFromTheme(useTheme());

  const [selectedThemeID, setSelectedThemeID] = useState(
    initialChosenOverrideThemeID
      ? initialChosenOverrideThemeID
      : currentPhoneThemeID,
  );

  const selectAndSaveThemeChoice = themeID => {
    setSelectedThemeID(themeID);
    store.dispatch(updateChosenOverrideThemeID(themeID));
  };

  return (
    <FlatList
      data={Object.values(DARK_MODE_OVERRIDE_OPTIONS)}
      extraData={selectedThemeID}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <Pressable onPress={() => selectAndSaveThemeChoice(item.id)}>
            <RowWithCheckmark
              textToDisplay={item.themeName}
              isChecked={item.id === selectedThemeID}
            />
          </Pressable>
        );
      }}
      ItemSeparatorComponent={() => <Line></Line>}
    />
  );
};
