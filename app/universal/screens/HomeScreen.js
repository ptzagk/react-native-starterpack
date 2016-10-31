import React from 'react';

import {
    View,
    Text
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

export default class HomeScreen extends React.Component {

    static route = {
        navigationBar: {
            title: 'Home',
            renderRight: () => {
                return (
                    <Entypo name="plus" size={32} color="black" style={{margin: 10}}/>
                )
            }
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
