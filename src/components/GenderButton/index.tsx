import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


import { Foundation, } from '@expo/vector-icons';

interface GenderButtonProps extends TouchableOpacityProps {
  title: string;
  gender: 'male' | 'female';
  setGender: (gender: string) => void;
  isActive: boolean;
}

const icons = {
  male: 'male-symbol',
  female: 'female-symbol'
}


export default function GenderButton({
  title,
  gender,
  setGender,
  isActive,
  ...rest
}: GenderButtonProps) {
  return (
    <TouchableOpacity
      style={isActive ? styles.genderContainerSelected : styles.genderContainer}
      onPress={() => setGender(gender)}
      activeOpacity={0.4}
    >
      <Foundation
        name={icons[gender]}
        size={30}
        color={isActive ? 'black' : 'white'}
      />
      <Text
        style={isActive ? styles.textGenderSelected : styles.textGender}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  genderContainer: {
    width: '43%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    marginHorizontal: 2,
    marginVertical: 4,
    borderRadius: 12,
    justifyContent: 'center',
  },
  genderContainerSelected: {
    width: '43%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    marginHorizontal: 2,
    marginVertical: 4,
    borderRadius: 12,
    borderWidth: 0.8,
    justifyContent: 'center',
    backgroundColor: '#rgb(136, 136, 243)',
  },
  textGender: {
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    color: '#FFF',
    marginHorizontal: 6
  },
  textGenderSelected: {
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    color: '#000',
    marginHorizontal: 6
  },
})