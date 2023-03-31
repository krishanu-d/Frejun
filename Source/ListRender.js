import { memo } from "react";
import { View, Text, StatusBar, StyleSheet, TextInput, Image, KeyboardAvoidingView, RefreshControl, ToastAndroid, TouchableOpacity } from "react-native";
import { Colors } from "./Assets/Colors";
import FastImage from "react-native-fast-image";
import { Images } from "./Assets/Images";
import React, { PureComponent } from 'react';
// import { baseGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon";

class RenderData extends React.PureComponent {
    constructor(props) {
        super(props)
        // console.log(props)
    }
    render() {
        return (
            <>
                <View style={{ backgroundColor: Colors.orange, marginTop: 5, padding: 10, borderRadius: 10, marginBottom: 5, flexDirection: 'row', alignpropss: "center" }}>
                    <FastImage source={this.props.data.picture ? { uri: this.props.data.picture } : Images.search} resizeMode='contain' style={{ width: 70, height: 70, }} />
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: Colors.textColor, fontSize: 18 }}>Name :  {this.props.data.firstName} {this.props.data.lastName}</Text>
                    </View>

                </View>
            </>

        )
    }
}




export default RenderData;