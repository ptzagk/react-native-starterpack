import React from 'react';

import {
    View,
    Text
} from 'react-native';

export default class SettingsScreen extends React.Component {

    static route = {
        navigationBar: {
            title: 'Settings',
        }
    }

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text>SettingsScreen!</Text>
            </View>
        )
    }
}
