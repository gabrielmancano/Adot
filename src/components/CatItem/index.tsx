import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Annimal } from '../../data';



export default function CatItem({ name, breed, age, photo }: Annimal) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} resizeMode='center' source={photo} />
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.title}>
          {name}
        </Text>
        <Text style={styles.text}>
          {breed}.
        </Text>
        
        <Text style={[styles.text, { fontSize: 18 }]}>
          {age} meses
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(14, 14, 73)',
    width: '90%',
    alignSelf: 'center',
    height: 210,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#FFF',
    
    borderRadius: 10,
    marginVertical: 7
  },
  title: {
    fontFamily: 'Anton_400Regular',
    fontSize: 38,
    color: '#FFF',
    marginBottom: 0
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 22,
    color: 'rgb(158, 190, 190)',
    marginVertical: 0
  },
  image: {
    width: 150,
    height: 160,
    borderRadius: 100
  }
})