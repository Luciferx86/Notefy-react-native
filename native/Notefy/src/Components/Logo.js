import React from 'react';
import ReactNative, { Image, View, Text } from 'react-native';

const Logo = (props) => {
    return (
        <View
            style={{
                alignItems: 'center'
            }}>
            <Image
                style={{
                    resizeMode: 'contain',
                    width: 180,
                    height: 180,
                    padding: 20,
                    marginTop: 100,
                }}
                source={require('../assets/notefylogo.png')}
            />
            <Text style={{
                position: 'absolute',
                alignSelf: 'center',
                color: 'black',
                transform: [{ rotate: '-27deg'}],
                marginTop: 140,
                paddingRight: 76,
                fontSize: 20
            }}>{props.text}</Text>
        </View >
    )
}

export default Logo;