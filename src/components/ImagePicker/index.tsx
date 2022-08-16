import React, { useState, useEffect, useContext } from 'react';
import { Image, Text, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { FontAwesome, Entypo } from '@expo/vector-icons';
import { Context } from '../../contexts/context';

export default function ImagePickerExample() {
    const { newAnnimalImage, setNewAnnimalImage }: any = useContext(Context);
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [2, 2],
            quality: 1,

        });

        if (!result.cancelled) {
            setNewAnnimalImage(result.uri);
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={pickImage}>
            <Text style={styles.text}>Selecionar foto</Text>
            <FontAwesome name="photo" size={24} color="black" />
        </TouchableOpacity>

        // <Entypo name="check" size={24} color="black" />
        
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 15,
        backgroundColor: 'rgb(136, 136, 243)',
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 17,
        color: '#000',
        marginHorizontal: 4,
        marginRight: 10
    },
})