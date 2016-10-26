import React, { Component } from 'react';
import {
  	AppRegistry,
	StatusBar
} from 'react-native';

import {
	createRouter,
	NavigationProvider,
	StackNavigation,
} from '@exponent/ex-navigation';

import DrawerNavigation from './app/universal/DrawerNavigation'
import HomeScreen from './app/universal/screens/HomeScreen'
import SettingsScreen from './app/universal/screens/SettingsScreen'
import TabSreenExample from './app/universal/screens/TabScreenExample'

export const Router = createRouter(() => ({
	home: () => HomeScreen,
	settings: () => SettingsScreen,
    tabSreenExample: () => TabSreenExample
}));

class StarterKit extends Component {

	render() {
		return (
			<NavigationProvider router={Router}>
				<StatusBar barStyle="light-content" />
				<DrawerNavigation />
			</NavigationProvider>
		);
	}
}

AppRegistry.registerComponent('StarterKit', () => StarterKit);
