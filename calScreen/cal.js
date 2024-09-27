import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Calrn = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 30 }}>
                Hello Calc
            </Text>

            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{height:30 , width:30}}>

                </TouchableOpacity>
            </View>


        </View>
    );
}

export default Calrn;