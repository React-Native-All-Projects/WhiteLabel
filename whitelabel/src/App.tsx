

import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Config from "react-native-config";
import StyleConfig from "./apps/style.config";
import TextConfig from "./apps/text.config";

const App = () =>{
    useEffect(() => {
        console.log('Config : ' , Config);
        console.log('Style : '  , StyleConfig);
        console.log('Text : ' , TextConfig)
    }, [])

    return (
        <View style={[{flex:1,justifyContent:'center',alignItems:'center'}]}>
            <Text style={[StyleConfig.text]}>APPLICATION_ID : {Config.APPLICATION_ID}</Text>
            <Text style={[StyleConfig.text]}>Text : {TextConfig.Text}</Text>
        </View>
    )
}

export default App;
