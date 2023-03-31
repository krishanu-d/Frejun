import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, Dimensions } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { Colors } from "./Assets/Colors";



export default function Splash(props) {
    const isFocused = useIsFocused()

    useEffect(() => {

        if (isFocused) {
            setTimeout(() => {
                props.navigation.replace('BottomTabs');
            }, 2000)
        }

    }, [isFocused])

    return (
        <>
            <StatusBar
                translucent
                barStyle='light-content'
                backgroundColor={Colors.navyBlue}
            />
            <SafeAreaView style={Styles.mainContainer}>
                <View style={{ position: 'absolute', alignSelf: 'center', top: '50%' }}>
                    <Text style={{ fontSize: 30, fontWeight: '600', color: Colors.bgBlack, }}>
                        Frejun
                    </Text>
                </View>
            </SafeAreaView>

        </>
    )
}
const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.bgWhite,
        flex: 1,
    },
})