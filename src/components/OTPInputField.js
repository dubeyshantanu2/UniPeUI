import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

const OTPInputField = ({ setPinReady, code, setCode, maxLength }) => {
    const codeDigitsArray = new Array(maxLength).fill(0);

    const textInputRef = useRef(null);

    const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

    const handleOnPress = () => {
        setInputContainerIsFocused(true);
        textInputRef?.current?.focus();
    };

    const handleOnBlur = () => {
        setInputContainerIsFocused(false);
    };

    useEffect(() => {
        setPinReady(code.length === maxLength);
        return () => setPinReady(false);
    }, [code]);

    const toCodeDigitInput = (_value, index) => {
        const emptyInputChar = " ";
        const digit = code[index] || emptyInputChar;

        return (
            <View style={styles.OTPInput} key={index}>
                <Text style={styles.OTPInputText}>{digit}</Text>
            </View>
        );
    }

    return (
        <View style={styles.OTPInputSection}>
            <TouchableOpacity style={{ flexDirection: "row", }} onPress={handleOnPress}>
                {codeDigitsArray.map(toCodeDigitInput)}
            </TouchableOpacity>
            <TextInput
                value={code}
                onChangeText={setCode}
                maxLength={maxLength}
                keyboardType="number-pad"
                returnKeyType='done'
                textContentType='oneTimeCode'
                ref={textInputRef}
                onBlur={handleOnBlur}
                style={styles.hiddenContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    hiddenContainer: {
        position: "absolute",
        width: 1,
        height: 1,
        opacity: 0
    },
    OTPInputSection: {
        justifyContent: "center",
        alignItems: "center",

    },
    OTPInputContainer: {
        width: "70%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    OTPInput: {
        borderColor: "#BDBDBD",
        minWidth: "20%",
        borderBottomWidth: 2,
        padding: 12,
    },
    OTPInputText: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        // color: "#fff
    }
})

export default OTPInputField;