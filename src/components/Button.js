import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
const { height } = Dimensions.get('window');

function Button({ onPress, text }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#4E46F1",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "92%",

        //  borderColor: 
    },
    text: {
        color: "#fff",
        fontSize: height * 0.02,
        // fontFamily: "SemiBold",
    }
})

export default Button;