import React, { Component } from 'react';
import ReactNative, { View } from 'react-native';
import Recycler from './Recycler';

class SharedNotes extends Component {
    render() {
        return (
            <View>
                <Recycler />
            </View>
        )
    }
}

export default SharedNotes;