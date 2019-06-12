import React from 'react';
import ReactNative, { View, Text, ImageBackground } from 'react-native';
import cardbg from '../assets/single_note_bg.png';

const SingleNoteCard = (props) => {
    return (
        <ImageBackground
            source={cardbg}
            style={{ width: '100%', height: '100%' }}
            resizeMode='contain'>
            <Text style = {{
                paddingLeft: 70,
                paddingTop: 40,
                fontSize: 20, 
                color: '#1874CD'
            }}>{props.noteTitle}</Text>
            <Text style = {{
                paddingLeft: 70,
                paddingTop: 20,
                fontSize: 20,
                color: '#1874CD'
            }}>{props.noteText}</Text>
        </ImageBackground>

    )
}

export default SingleNoteCard;