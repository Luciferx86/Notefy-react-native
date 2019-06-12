/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react';
import ReactNative, {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import InputField from './InputField';
import Logo from './Logo';

import emailBg from '../assets/email_textfield.png';
import passBg from '../assets/password_textfield.png';
import userBg from '../assets/username_textfield.png';
import alreadyregistered from '../assets/alreadyregistered.png';
import newuser from '../assets/newuser.png';
import MyButton from './MyButton';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import ToastButton from './ToastButton';

class LoginForm extends Component {


    constructor() {
        super();
        this.state = {
            showUsername: true,
            loginToggler: true,
            email: '',
            password: '',
            username: '',
            nowProcessing: false
        }
    }

    renderUsername = () => {
        if (this.state.showUsername) {
            return (
                <InputField
                    bgImg={userBg}
                    value={this.state.username}
                    changeText={(value) => {
                        this.setState({
                            username: value
                        })
                    }}
                    placeHolder='Set a UserName' />
            )
        }
    }
    textToggler = () => {
        if (this.state.loginToggler)
            return alreadyregistered;
        else
            return newuser;
    }
    buttonToggler = () => {
        if (this.state.loginToggler) {
            return "Sign up"
        } else {
            return "Sign In"
        }
    }
    doneProcessing = () => {
        this.setState({
            nowProcessing: false
        })
    }
    trySignUpOrSignIn = () => {
        console.log("in trySignUpOrSignIn")
        this.setState({
            nowProcessing: true
        })
        const { email, password } = this.state;
        if (this.state.loginToggler) {
            console.log("trying sign up");
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    // Actions.main();
                    this.doneProcessing();
                    Actions.reset('main');
                })
                .catch((error) => {
                    this.doneProcessing();
                    console.log(error);
                })
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    this.doneProcessing();
                    Actions.main();
                })
                .catch((error) => {
                    this.doneProcessing();
                    console.log(error);
                })
        }
    }

    render() {
        console.log("render Loginform");
        return (
            <ImageBackground
                source={require('../assets/bg.png')}
                style={{ width: '100%', height: '100%' }}>
                <View>
                    <Logo />
                    <InputField
                        value={this.state.email}
                        changeText={(text) => {
                            this.setState({
                                email: text
                            })
                        }}
                        bgImg={emailBg}
                        placeHolder='Email' />
                    {this.renderUsername()}
                    <InputField
                        value={this.state.password}
                        changeText={(value) => {
                            this.setState({
                                password: value
                            })
                        }}
                        bgImg={passBg}
                        placeHolder='Password' />

                </View>
                <MyButton
                    nowProcessing={this.state.nowProcessing}
                    btnTitle={this.buttonToggler()}
                    onPress={this.trySignUpOrSignIn} />

                <TouchableOpacity onPress={() => {
                    console.log("Already Registered");

                    this.setState({
                        showUsername: !this.state.showUsername,
                        loginToggler: !this.state.loginToggler
                    })

                }}>
                    <Image
                        style={{
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            flex: 1,

                            height: 180,
                            padding: 20,
                            marginTop: 80,
                            position: 'absolute',
                        }}
                        source={this.textToggler()} />
                </TouchableOpacity>

            </ImageBackground>
        )
    }
}

export default LoginForm;