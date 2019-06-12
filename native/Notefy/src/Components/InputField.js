import React from 'react';
import ReactNative, { ImageBackground, View, TextInput } from 'react-native';

import bgImg from '../assets/email_textfield.png'

const Input = (props) => {
    checkType = () => {
        if (props.placeHolder == 'Password') {
            return true;
        } else {
            return false;
        }
    }
    console.log(props);
    return (
        <View style={{
            height: 55,
            marginTop: 20
        }}>
            <ImageBackground
                source={props.bgImg}
                style={{ width: '100%', height: '100%' }}
                resizeMode='contain'>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 16

                    }}>
                    <TextInput
                        style={{
                            fontSize: 22,
                            flex: 1,
                            paddingLeft: 62,
                            marginLeft: 15,
                            marginRight: 15,
                            color: 'white',
                        }}
                        value={props.value}
                        onChangeText={props.changeText}
                        placeholder={props.placeHolder}
                        placeholderTextColor='white'
                        autoCorrect={false}
                        secureTextEntry={this.checkType()}
                        autoCapitalize='none'
                    />

                </View>
            </ImageBackground>
        </View>
    )
}

export default Input;