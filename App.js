import React from 'react';

// Components
import {Text} from 'react-native';
import {
  AutomaticDarkModeSwitch,
  Card,
  CenteringContainer,
  Row,
  ThemedNavigationContainer,
  ThemeOverrideChoicesList,
} from './src/components/';

// Hooks
import {useSelector} from 'react-redux';

// Redux
import {Provider} from 'react-redux';
import {selectChosenOverrideThemeID} from './src/redux/reducers/themesReducer';
import store from './src/redux/store';
import {GRAY_4} from './src/constants/colors';

const AppScreens = () => {
  const chosenOverrideThemeID = useSelector(selectChosenOverrideThemeID);

  return (
    <ThemedNavigationContainer>
      <CenteringContainer>
        <Card>
          <Row>
            <Text
              style={{
                fontSize: 16,
                color: GRAY_4,
              }}>
              Automatic
            </Text>
            <AutomaticDarkModeSwitch />
          </Row>
          {chosenOverrideThemeID ? <ThemeOverrideChoicesList /> : null}
        </Card>
      </CenteringContainer>
    </ThemedNavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppScreens />
    </Provider>
  );
};

export default App;
