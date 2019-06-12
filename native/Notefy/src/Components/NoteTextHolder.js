import React from 'react';
import ReactNative, {
    View,
    ImageBackground,
    Text,
    Dimensions,
    TextInput
} from 'react-native';
import noteTextBg from '../assets/notetextbg.png';

const NoteTextHolder = (props) => {
    return (
        <View style={{
            // alignItems: 'auto',

            // flexDirection: 'row',
            // flexWrap: 'wrap',
            flex: 1,
        }}>
            <View style={{
                width: Dimensions.get('window').width - 40,
                // height: Dimensions.get(noteTextBg).height,
                marginLeft: 20,
                // marginTop: -200,
                flexDirection: 'row',
                flex: 1,
                // alignSelf: 'baseline',
                // flexWrap: 'wrap',
                marginRight: 20,
                // borderWidth: 4
            }}>
                <ImageBackground
                    source={noteTextBg}
                    resizeMode='contain'
                    style={{ width: '100%', height: '100%', flex: 1 }}>
                    <TextInput
                        style={{
                            fontSize: 22,
                            flex: 1,
                            paddingLeft: 62,
                            marginLeft: 15,
                            marginRight: 15,
                            // marginTop: -100,
                            // flex: 1,
                            color: 'white',
                        }}
                        // multiline={true}
                        value={props.value}
                        onChangeText={props.changeText}
                        placeholder="yoyo"
                        placeholderTextColor='white'
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                </ImageBackground>
            </View>
        </View>

    )
}

export default NoteTextHolder;

{/* <View style={{
    width: 300, height: Dimensions.get('window').height - 300
}}>
    <ImageBackground
        source={noteTextBg}
        style={{ width: '100%', height: '100%', borderRadius: 50 }}>

    </ImageBackground>
</View> */}