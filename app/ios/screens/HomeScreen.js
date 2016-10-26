import React from 'react';

import {
    View,
    Text
} from 'react-native';

export default class HomeScreen extends React.Component {

    static route = {
        navigationBar: {
            title: 'Home',
        }
    }

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text>HomeScreen!</Text>
            </View>
        )
    }
}
