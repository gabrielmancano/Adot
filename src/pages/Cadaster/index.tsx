import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import { MaterialCommunityIcons, FontAwesome, Foundation, Entypo, } from '@expo/vector-icons';

import { useForm, Controller } from "react-hook-form";


import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import TypeButton from '../../components/TypeButton';
import GenderButton from '../../components/GenderButton';

import { useNavigation } from '@react-navigation/native';
import { Context } from '../../contexts/context';
import ImagePickerExample from '../../components/ImagePicker';

interface FormData {
    [name: string]: any;
}

interface AddCatProps {
    name: string;
    breed: string;
    age: number;
}

export default function Cadaster() {

    const { setCatsList, setDogsList, newAnnimalImage }: any = useContext(Context);

    const navigation = useNavigation();

    const [isVacinatedButtonActive, setIsVacinatedButtonActive] = useState(false);
    const [isCastratedButtonActive, setIsCastratedButtonActive] = useState(false);

    const [type, setType] = useState('dog');
    const [gender, setGender] = useState('male');

    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            type: '',
            age: '',
            gender: '',
            breed: '',
            photo: ''
        }
    });

    function onSubmit(form: FormData) {
        if (!form.name || !form.breed || !form.age)
            return Alert.alert("ATENÇÃO:", "Preencha todos os campos");

        if (!newAnnimalImage)
            return Alert.alert("ATENÇÃO:", "Selecione uma foto do animal");

        const data = {
            name: form.name,
            type,
            age: form.age,
            gender,
            breed: form.breed.toLowerCase(),
            photo: { uri: newAnnimalImage },
        }

        if (type === 'dog') {
            setDogsList((oldData: any) => [
                data, ...oldData
            ]);

            navigation.navigate('Dogs');
        } else {
            setCatsList(oldData => [
                data, ...oldData
            ]);

            navigation.navigate('Cats');
        }
    }


    //   Métodos dos RadioButton
    function handleYesRadioButtonVacinated() {
        setIsVacinatedButtonActive(true);
    }

    function handleNoRadioButtonVacinated() {
        setIsVacinatedButtonActive(false);
    }

    function handleYesRadioButtonCastrated() {
        setIsCastratedButtonActive(true);
    }

    function handleNoRadioButtonCastrated() {
        setIsCastratedButtonActive(false);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                {/* Header */}
                <View style={{ marginHorizontal: 20, marginVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Anton_400Regular', fontSize: 36, color: '#ffee00', marginHorizontal: 8 }}>
                            cadastrar
                            <Text style={{ fontFamily: 'Anton_400Regular', fontSize: 36, color: '#fff', marginHorizontal: 8 }}>.</Text>
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                    >
                        <FontAwesome name="home" size={35} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={{ borderBottomColor: '#cacaca', borderBottomWidth: 1, marginBottom: 20 }} />

                <View style={styles.formContainer}>

                    <View
                    style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}
                    >

                    {/* Nome */}
                    <Controller
                        control={control}
                        rules={{
                            required: false,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="nome"
                            />
                        )}
                        name="name"
                    />

                    {/* Idade */}
                    <Controller
                        control={control}
                        rules={{
                            required: false,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.ageInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="idade (meses)"
                                keyboardType='number-pad'
                            />
                        )}
                        name="age"
                    />

</View>

                    {/* Cachorro/Gato */}
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginVertical: 3 }}
                    >
                        <TypeButton
                            title='cachorro'
                            type='dog'
                            isActive={type === 'dog'}
                            setType={setType}
                        />

                        <TypeButton
                            title='gato'
                            type='cat'
                            isActive={type === 'cat'}
                            setType={setType}
                        />
                    </View>

                    {/* Macho/Fêmea e Raça */}
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 }}>
                        <View style={{ width: '49%', flexDirection: 'row' }} >

                            <GenderButton
                                isActive={gender === 'male'}
                                title='M'
                                gender='male'
                                setGender={setGender}
                            />

                            <GenderButton
                                isActive={gender === 'female'}
                                title='F'
                                gender='female'
                                setGender={setGender}
                            />

                        </View>

                        <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={[
                                        styles.formInput,
                                        { width: '49%' }
                                    ]}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="raça"
                                />
                            )}
                            name="breed"
                        />

                    </View>


                    {/* Vacinado/Castrado */}
                    <View style={{ marginVertical: 3 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', marginVertical: 4 }}>

                            {/* Vacinado */}
                            <View>
                                <Text
                                    style={{ color: "#FFF", fontFamily: 'Anton_400Regular', fontSize: 18, marginBottom: 5 }}
                                >
                                    vacinado(a) :
                                </Text>
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                    onPress={handleYesRadioButtonVacinated}
                                >
                                    <View
                                        style={styles.radioButton}
                                    >
                                        {isVacinatedButtonActive && <View style={{ borderRadius: 50, backgroundColor: '#000', width: 8, height: 8 }} />}
                                    </View>
                                    <Text style={{ color: "#FFF", fontFamily: 'Anton_400Regular' }}>
                                        sim
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                    onPress={handleNoRadioButtonVacinated}
                                >
                                    <View
                                        style={styles.radioButton}
                                    >
                                        {!isVacinatedButtonActive && <View style={{ borderRadius: 50, backgroundColor: '#000', width: 8, height: 8 }} />}
                                    </View>
                                    <Text style={{ color: "#FFF", fontFamily: 'Anton_400Regular' }}>
                                        não
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* Divider */}
                            <View style={{ borderLeftColor: '#c0c0c0', borderLeftWidth: 1, height: '90%' }} />

                            {/* Castrado */}
                            <View>
                                <Text
                                    style={{ color: "#FFF", fontFamily: 'Anton_400Regular', fontSize: 18, marginBottom: 5 }}
                                >
                                    castrado(a) :
                                </Text>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                    onPress={handleYesRadioButtonCastrated}
                                >
                                    <View
                                        style={styles.radioButton}
                                    >
                                        {isCastratedButtonActive && <View style={{ borderRadius: 50, backgroundColor: '#000', width: 8, height: 8 }} />}
                                    </View>
                                    <Text style={{ color: "#FFF", fontFamily: 'Anton_400Regular' }}>
                                        sim
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                    onPress={handleNoRadioButtonCastrated}
                                >
                                    <View
                                        style={styles.radioButton}
                                    >
                                        {!isCastratedButtonActive && <View style={{ borderRadius: 50, backgroundColor: '#000', width: 8, height: 8 }} />}
                                    </View>
                                    <Text style={{ color: "#FFF", fontFamily: 'Anton_400Regular' }}>
                                        não
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>


                    </View>

                    <ImagePickerExample />

                    {/* Botão */}
                    <TouchableOpacity style={styles.cadasterButton} activeOpacity={0.5} onPress={handleSubmit(onSubmit)}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[styles.text, { fontSize: 17, marginRight: 10, color: '#000' }]}>
                                CADASTRAR
                            </Text>
                            <Entypo name="arrow-right" size={22} color="black" />
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(7, 7, 41)',
        flex: 1,
        width: '100%',
    },
    formContainer: {
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    formInput: {
        backgroundColor: '#fff',
        width: '55%',
        height: 44,
        borderRadius: 10,
        marginVertical: 4,
        fontFamily: 'Anton_400Regular',
        fontSize: 14,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    ageInput: {
        backgroundColor: '#fff',
        width: '37%',
        height: 44,
        borderRadius: 10,
        marginVertical: 4,
        fontFamily: 'Anton_400Regular',
        fontSize: 14,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    radioButton: {
        borderRadius: 50,
        backgroundColor: '#FFF',
        width: 15,
        height: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cadasterButton: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 15,
        backgroundColor: '#ffee00',
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 17,
        color: '#000',
        marginHorizontal: 4,
        marginRight: 10
    },
})