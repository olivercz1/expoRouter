import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native-web";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

export default HomeScreen = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.headertitle}> Home</Text>
            </View>


        <Text style={Styles.title}> Bem Vindo!</Text>
        <TouchableOpacity style={Styles.TouchableOpacity} onPress={( )=>{router.push("/tela2")}}></TouchableOpacity>
        </View>

        
    )
};

const Styles = StyleSheet.create({
    container : {
        flex:1,
        alignItens:"center",
    },

});