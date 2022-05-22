import {
  UPDATE_CHOSEN_OVERRIDE_THEME_ID,
  UPDATE_CURRENT_PHONE_THEME,
} from '../actionTypes';

export const updateChosenOverrideThemeID = chosenOverrideThemeID => ({
  type: UPDATE_CHOSEN_OVERRIDE_THEME_ID,
  payload: chosenOverrideThemeID,
});

export const updateCurrentPhoneTheme = theme => ({
  type: UPDATE_CURRENT_PHONE_THEME,
  payload: theme,
});
