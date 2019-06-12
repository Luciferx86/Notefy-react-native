import React, { Component } from 'react';
import ReactNative, { View, Text, Button } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast'

class ToastButton extends Component {
    render() {
        return (
            <View>
                <Button
                    title="toast"
                    onPress={() => {
                        console.log("toassttt");
                        this.refs.toast.show('hello world!', DURATION.FOREVER);
                    }}
                />
                <Toast ref="toast" />
            </View>
        )
    }
}

export default ToastButton;