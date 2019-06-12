import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import firebase from 'firebase';
import Dashboard from './Components/Dashboard';
import Tab from './Components/Tab';
import NewNote from './Components/NewNote'

class RouterComponent extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyC9sGQY7WX59ntSi-r5wCPgFDAyGAfDMJ0",
            authDomain: "notefy-6b00f.firebaseapp.com",
            databaseURL: "https://notefy-6b00f.firebaseio.com",
            projectId: "notefy-6b00f",
            storageBucket: "notefy-6b00f.appspot.com",
            messagingSenderId: "850420507140",
            appId: "1:850420507140:web:1bb5391e8a3ab62d"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
    render() {
        return (
            <Router>
                <Scene key="root"  hideNavBar>
                    <Scene key="auth">
                        <Scene
                            hideNavBar
                            key="login"
                            component={LoginForm}
                            title="Login"
                            initial
                        />
                    </Scene>
                    <Scene key="main" type = 'reset' initial >
                        <Scene
                            key="dashboard"
                            initial
                            component = {NewNote}
                            title = "Dashboard" />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent;