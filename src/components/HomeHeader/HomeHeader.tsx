import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function HomeHeader() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        adot
        <Text style={{ color: '#ffee00' }}>.</Text>
      </Text>

      {/* <View style={{ borderBottomColor: '#cacaca', borderBottomWidth: 1 }} /> */}


      <View style={{ flex: 1, padding: 50, alignItems: 'center', marginTop: 100 }}>

        <Text
          style={{ color: '#FFF', fontFamily: 'Anton_400Regular', fontSize: 22, marginBottom: 14 }}>
          qual animal deseja adotar?
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.4}
          onPress={() => navigation.navigate("Cats")}
        >
          <MaterialCommunityIcons name="cat" size={30} color="#ffee00" />
          <Text style={styles.text}>gato</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.4}
          onPress={() => navigation.navigate("Dogs")}
        >
          <MaterialCommunityIcons name="dog" size={30} color="#ffee00" />
          <Text style={styles.text}>cachorro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cadasterButton}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Cadaster")}
        >
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={[styles.text, { fontSize: 15, marginHorizontal: 0, color: '#000' }]}>
              cadastrar para adoção
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(7, 7, 41)',
    flex: 1,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontFamily: 'Anton_400Regular',
    fontSize: 36,
    marginHorizontal: 14
  },
  text: {
    color: '#FFF',
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    marginHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    height: 70,
    width: 185,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginVertical: 6,
    borderColor: '#D8D8D8',
    borderWidth: 0.3,
    backgroundColor: 'rgb(7, 7, 35)',
  },
  cadasterButton: {
    flexDirection: 'row',
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 15,
    backgroundColor: 'rgb(136, 136, 243)',
  }
})