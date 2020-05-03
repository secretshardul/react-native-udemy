import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    search: SearchScreen,
    resultsShow: ResultsShowScreen

  },
  {
    initialRouteName: 'search',
    defaultNavigationOptions: {
      title: 'Business search'
    }
  });

export default createAppContainer(navigator);
//code exported by App.js is shown on screen
