

import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Config from "react-native-config";


const App = () =>{
    useEffect(() => {
        console.log('Config : ' , Config);
    }, [])

    return (
        <View style={[{flex:1,justifyContent:'center',alignItems:'center'}]}>
            <Text>{Config.APPLICATION_ID}</Text>
        </View>
    )
}

export default App;
