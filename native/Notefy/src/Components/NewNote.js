import React, { Component } from 'react';
import ReactNative, { View, Text, ImageBackground } from 'react-native';
import InputField from './InputField';
import titleFieldBg from '../assets/title_textfield.png'
import noteTextBg from '../assets/notetextbg.png'
import bgImg from '../assets/bg.png';
import NoteTextHolder from './NoteTextHolder';

class NewNote extends Component {
    render() {
        return (
            <View>
                <ImageBackground
                    source={bgImg}
                    style={{ width: '100%', height: '100%' }}>
                    <InputField
                        bgImg={titleFieldBg}
                        placeHolder="Enter Title" />
                    <NoteTextHolder />
                </ImageBackground>
            </View >
        )
    }
}


export default NewNote;