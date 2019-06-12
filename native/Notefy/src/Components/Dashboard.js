import React, { Component } from 'react';
import ReactNative, { View } from 'react-native';
import Tab from './Tab';
import Logo from './Logo';

class Dashboard extends Component {
    render() {
        return (
            <View>
                <Tab/>
                <Logo/>
            </View>
        )
    }
}

export default Dashboard;