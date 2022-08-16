import React from 'react';
import { StyleSheet, Text, TouchableHighlightProps, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons, } from '@expo/vector-icons';

interface TypeButtonProps extends TouchableHighlightProps {
  title: string;
  type: 'dog' | 'cat';
  setType: (type: string) => void;
  isActive: boolean;
}

export default function TypeButton({
  isActive,
  title,
  type,
  setType,
  ...rest
 }: TypeButtonProps) {
  return (
    <TouchableOpacity
      style={isActive ? styles.typeContainerSelected : styles.typeContainer}
      activeOpacity={0.4}
      onPress={() => setType(type)}
    >
      <MaterialCommunityIcons
        name={type}
        size={30}
        color={isActive ? 'black' : 'white'}
      />

      <Text style={isActive ? styles.textSelected : styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  typeContainer: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    marginHorizontal: 4,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 0.8,
    justifyContent: 'center',
  },
  typeContainerSelected: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    marginHorizontal: 4,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 0.8,
    justifyContent: 'center',
    backgroundColor: '#rgb(142, 142, 240)',
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    color: '#FFF',
    marginHorizontal: 4
  },
  textSelected: {
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    color: '#000',
    marginHorizontal: 4
  },
})