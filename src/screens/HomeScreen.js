import React from 'react';
import { StyleSheet, Image, Text, SafeAreaView, StatusBar } from 'react-native';
function HomeScreen(props) {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#fff"} barStyle='dark-content' />
            <Image source={require("../../assets/prop.png")} />
            <Text style={{ marginTop: "5%" }}>No data found</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#fff",
        padding: "4%"
    }
})

export default HomeScreen;