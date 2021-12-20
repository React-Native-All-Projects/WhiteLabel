

import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Config from "react-native-config";
import configApp from "./apps/app.config";
import Style from "./apps/style";

const App = () =>{
    useEffect(() => {
        // console.log('Config : ' , Config);
        // console.log('configApp : ' , configApp);
        console.log('Style : '  , Style);
        
    }, [])

    return (
        <View style={[{flex:1,justifyContent:'center',alignItems:'center'}]}>
            <Text style={[Style.text]}>APPLICATION_ID : {Config.APPLICATION_ID}</Text>
            <Text style={[Style.text]}>Text : {configApp.text.text}</Text>
        </View>
    )
}

export default App;
