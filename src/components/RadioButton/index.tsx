import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';

interface RadioButtonProps {
    title: string;
    isActive: boolean;
    setCastrated?: (value: boolean) => void;
    setVacinated?: (value: boolean) => void;
}

export default function RadioButton({
    title,
    isActive,
    setVacinated,
    setCastrated,
}: RadioButtonProps) {

    function handleActive() {
        setCastrated
    }

    return (
        <View>
            <Text style={styles.text}>
                {title}
            </Text>
            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {}}
            >
                <MaterialIcons 
                    name={isActive ? "radio-button-on" : "radio-button-off" } 
                    size={22} 
                    color="white" 
                />

                <Text style={styles.optionText}>
                    sim
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {}}
            >
                <MaterialIcons 
                    name={!isActive ? "radio-button-on" : "radio-button-off" } 
                    size={22} 
                    color="white" 
                />

                <Text style={styles.optionText}>
                    não
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#FFF",
        fontFamily: 'Anton_400Regular',
        fontSize: 18,
        marginBottom: 5
    },
    optionText: {
        color: "#FFF",
        fontFamily: 'Anton_400Regular',
        fontSize: 15,
        marginBottom: 6,
        marginLeft: 6
    }
})