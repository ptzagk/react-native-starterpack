import {
	createRouter
} from '@exponent/ex-navigation';

import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import TabSreenExample from './screens/TabScreenExample'

export const Router = createRouter(() => ({
	home: () => HomeScreen,
	settings: () => SettingsScreen,
    tabSreenExample: () => TabSreenExample
}));
