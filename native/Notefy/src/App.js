import React, { Component } from 'react';
import ReactNative, { Image, Text, View } from 'react-native';
import Logo from './Components/Logo'
import LoginForm from './Components/LoginForm';
import Router from './Router';

class App extends Component {
    render() {
        return (
            <View>
                <Text>yoyoyo</Text>
                <Router/>
            </View>
        )
    }
}


// DO: add redux to this app to get the notes from the firebase server and re-render the
//     DOM with the new notes


// DO: find an alternate for recyclerView for both android and ios.



export default App;