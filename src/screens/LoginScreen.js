import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, Keyboard, Text, Image, SafeAreaView, TextInput, Dimensions, Pressable, } from 'react-native';
import Button from '../components/Button';
import DisableButton from '../components/DisableButton';

const { height } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
    const [mobile, setMobile] = useState('');
    // console.log(mobile)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#fff"} barStyle='dark-content' />
            <Pressable onPress={Keyboard.dismiss} style={{ alignItems: "center" }}>
                <Image source={require("../../assets/logo.png")} style={{ height: height * 0.08, width: height * 0.3, marginTop: "10%" }} />
                <Text style={{ marginTop: "10%", fontSize: height * 0.020, color: "#76688C" }}>Enter Mobile Number for Verification</Text>
                <View style={{ width: "100%", marginTop: "20%" }}>
                    <Text style={{ fontFamily: "Roboto", fontSize: height * 0.02, color: "#A4A7AB", }}>Mobile Number</Text>
                    <TextInput
                        keyboardType="phone-pad"
                        value={mobile}
                        onChangeText={(text) => {
                            if (text.length == 10) { Keyboard.dismiss(); }
                            setMobile(text)
                        }}
                        maxLength={10}
                        selectionColor="#000"
                        style={{ borderBottomWidth: 0.5, height: 40, borderColor: "#A4A7AB", fontSize: height * 0.02 }} />
                </View>

            </Pressable>
            <View style={styles.footer}>
                {
                    mobile.length !== 10 ?
                        <DisableButton text={"Continue"} />
                        :
                        <Button text={"Continue"} onPress={() => navigation.navigate("Verify", {
                            mobile: mobile
                        })} />
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: "4%",
        justifyContent: "space-between",
    },
    footer: {
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
})

