import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
} from '@exponent/ex-navigation';

// import Entypo from 'react-native-vector-icons/Entypo';

import { Router } from './Router';

export default class DrawerNavigationComponent extends Component {

    _renderHeader = () => {
        return <Image
            source={require('../assets/reactNative.png')}
            style={styles.header} />;
    };

    _renderTitle = (text: string, isSelected: bool) => {
        return (
            <Text style={[styles.buttonTitleText, isSelected ? styles.selectedText : null]}>
                {text}
            </Text>
        );
    };

  // _renderIcon = (name: string, isSelected: bool) => {
  //   let extraStyle = {marginTop: 2};
  //   if (name === 'md-alert') {
  //     extraStyle = {...extraStyle, marginLeft: -3};
  //   }
  //   return (
  //     <Entypo
  //       style={[styles.icon, isSelected ? styles.selectedText : null, extraStyle]}
  //       name={name}
  //       size={24}
  //     />
  //   );
  // };

  render() {
        return (
            <DrawerNavigation
                renderHeader={this._renderHeader}
                drawerWidth={300}
                initialItem="home"
            >
                <DrawerNavigationItem
                    id="home"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Home', isSelected)}
                >
                    <StackNavigation
                        id="root"
                        defaultRouteConfig={{
                            navigationBar: {
                                backgroundColor: '#0084FF',
                                tintColor: '#fff',
                            },
                        }}
                        initialRoute={Router.getRoute('home')}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="settings"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Settings', isSelected)}
                >
                    <StackNavigation
                        id="settings"
                        defaultRouteConfig={{
                            navigationBar: {
                                backgroundColor: '#0084FF',
                                tintColor: '#fff',
                            },
                        }}
                        initialRoute={Router.getRoute('settings')}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="tabscreen"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Tab screen', isSelected)}
                >
                    <StackNavigation
                        id="tabscreen"
                        defaultRouteConfig={{
                            navigationBar: {
                                backgroundColor: '#0084FF',
                                tintColor: '#fff',
                            },
                        }}
                        initialRoute={Router.getRoute('tabSreenExample')}
                    />
                </DrawerNavigationItem>
            </DrawerNavigation>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        height: 180,
        width: null,
        resizeMode: 'cover',
    },
    buttonTitleText: {
        color: '#222',
        fontWeight: 'bold',
        marginLeft: 18,
    },
    icon: {
        color: '#999',
    },
    selectedText: {
        color: '#0084FF',
    },
    selectedItemStyle: {
        backgroundColor: "#E8E8E8",
    },
});
