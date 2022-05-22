import {
  UPDATE_CHOSEN_OVERRIDE_THEME_ID,
  UPDATE_CURRENT_PHONE_THEME,
} from '../actionTypes';
import {APP_THEMES} from '../../constants/appThemes';
import {DARK_MODE_OVERRIDE_OPTIONS} from '../../constants/darkModeOverrideOptions';

export const INITIAL_STATE = {
  chosenOverrideThemeID: null,
  currentAppTheme: APP_THEMES.light,
  currentPhoneTheme: APP_THEMES.light,
};

// Used in index.js in combineReducers
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_CHOSEN_OVERRIDE_THEME_ID: {
      const updatedAppTheme = getThemeFromId(action.payload)(state);

      return {
        ...state,
        chosenOverrideThemeID: action.payload,
        currentAppTheme: updatedAppTheme,
      };
    }

    case UPDATE_CURRENT_PHONE_THEME: {
      return {
        ...state,
        currentPhoneTheme: action.payload,
      };
    }

    default:
      return state;
  }
}

export const selectChosenOverrideThemeID = state =>
  state.themes.chosenOverrideThemeID;

export const selectCurrentAppTheme = state => state.themes.currentAppTheme;

export const getThemeFromId = id => state => {
  if (!id) return state.currentPhoneTheme;

  const themeDescription = DARK_MODE_OVERRIDE_OPTIONS[id];

  return themeDescription ? themeDescription.theme : APP_THEMES.light;
};
