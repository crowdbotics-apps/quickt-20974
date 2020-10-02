import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps121636Navigator from '../features/Maps121636/navigator';
import Settings121614Navigator from '../features/Settings121614/navigator';
import Settings121599Navigator from '../features/Settings121599/navigator';
import NotificationList121598Navigator from '../features/NotificationList121598/navigator';
import Maps121597Navigator from '../features/Maps121597/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps121636: { screen: Maps121636Navigator },
Settings121614: { screen: Settings121614Navigator },
Settings121599: { screen: Settings121599Navigator },
NotificationList121598: { screen: NotificationList121598Navigator },
Maps121597: { screen: Maps121597Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
