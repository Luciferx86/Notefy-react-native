import React, { Component } from 'react';
import ReactNative, { TouchableOpacity, Button, View, ActivityIndicator } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast'
const MyButton = (props) => {

    renderButtonOrIndicator = () => {
        if (!props.nowProcessing) {
            return (
                <Button
                    title={props.btnTitle}
                    color='white'
                    onPress={() => {
                        props.onPress();
                    }} />
            )
        } else {
            return (
                <ActivityIndicator size='large' />
            )
        }
    }
    return (
        <View style={{
            backgroundColor: '#969696',
            borderWidth: 4,
            borderRadius: 50,
            borderColor: '#969696',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 50
        }}>
            {this.renderButtonOrIndicator()}

        </View>
    )
}



export default MyButton;