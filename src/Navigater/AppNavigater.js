import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../compornent/Home';
import BressCheck from '..//compornent/BressCheck';

const MainStack = createStackNavigator({
    Home: {screen:Home},
    呼吸確認: {screen:BressCheck, name:'呼吸確認'}, 
  },{
    initialRouteName: 'Home',
  });
    
  const AppContainer = createAppContainer(MainStack);

  export default AppContainer;