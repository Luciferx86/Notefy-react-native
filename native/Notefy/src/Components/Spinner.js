import React from 'react'
import ReactNative,{ View, ActivityIndicator } from 'react-native'

const Spinner = () => {
    return(
        <View>
            <ActivityIndicator
            style = {
                {
                    margin : 10
                }
            }/>
        </View>
    )

}

export default Spinner;