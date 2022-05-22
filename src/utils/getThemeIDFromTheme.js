import {DARK_MODE_OVERRIDE_OPTIONS} from '../constants/darkModeOverrideOptions';

export default getThemeIDFromTheme = theme => {
  const themeDescriptions = Object.values(DARK_MODE_OVERRIDE_OPTIONS);
  const targetDescription = themeDescriptions.find(
    description => description.theme === theme,
  );

  return targetDescription.id;
};
