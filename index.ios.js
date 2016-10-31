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

import { Router } from './app/universal/Router'

import DrawerNavigation from './app/universal/DrawerNavigation'

class Woody extends Component {

	render() {
		return (
			<NavigationProvider router={Router}>
				<StatusBar barStyle="light-content" />
				<DrawerNavigation />
			</NavigationProvider>
		);
	}
}

AppRegistry.registerComponent('Woody', () => Woody);
