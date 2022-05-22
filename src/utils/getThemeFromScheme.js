import {APP_THEMES} from '../constants/appThemes';

export default getThemeFromScheme = scheme => {
  const schemeIsDark = scheme === 'dark';
  const currentPhoneTheme = schemeIsDark ? APP_THEMES.dark : APP_THEMES.light;

  return currentPhoneTheme;
};
