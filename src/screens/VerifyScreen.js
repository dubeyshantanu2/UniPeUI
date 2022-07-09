import React, { useState, useEffect, useContext } from 'react';
import { View, StatusBar, StyleSheet, Keyboard, Pressable, TouchableOpacity, Text, Image, SafeAreaView, Dimensions, } from 'react-native';
import Button from '../components/Button';
import DisableButton from '../components/DisableButton';
import OTPInputField from '../components/OTPInputField';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../components/context';
const { height } = Dimensions.get('window');

export default function VerifyScreen({ route, navigation }) {
    const mobile = route.params.mobile
    const [code, setCode] = useState("");
    const [pinReady, setPinReady] = useState(false);
    const MAX_CODE_LENGTH = 4;
    const [counter, setCounter] = useState(30);
    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const loginHandle = (mobile, code) => {
        signIn(mobile, code);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#fff"} barStyle='dark-content' />
            <Pressable style={{ alignItems: "center", }} onPress={Keyboard.dismiss}>
                <Image source={require("../../assets/logo.png")} style={{ height: height * 0.08, width: height * 0.3, marginTop: "10%" }} />
                <Text style={{ fontSize: height * 0.020, color: "#76688C", textAlign: "center", marginTop: "10%", }}>Please wait, we will auto verify the OTP sent to</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: height * 0.020, color: "#76688C", textAlign: "center", }}>{mobile}</Text>
                    <Ionicons name="pencil-outline" size={15} style={{ marginLeft: "1%" }} onPress={() => navigation.navigate("Login")} />
                </View>
                <View style={{ width: "100%", marginTop: "20%", alignItems: "center" }}>
                    <OTPInputField
                        setPinReady={setPinReady}
                        code={code}
                        setCode={setCode}
                        maxLength={MAX_CODE_LENGTH}
                    />
                </View>
                {
                    counter > 0 ?
                        <View style={{ marginTop: "10%", width: "100%", alignItems: "center" }}>
                            <Text style={{ color: "#4e46f1" }}>Resend OTP in {counter} sec</Text>
                        </View> :
                        <TouchableOpacity style={{ marginTop: "10%", width: "100%", alignItems: "center" }} onPress={() => setCounter(30)}>
                            <Text style={{ color: "#4e46f1" }}>Resend OTP</Text>
                        </TouchableOpacity>
                }
            </Pressable>
            <View style={styles.footer}>
                {
                    !pinReady ?
                        <DisableButton text={"Verify"} />
                        :
                        <Button text={"Verify"} onPress={() => { loginHandle(mobile, code) }} />
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

