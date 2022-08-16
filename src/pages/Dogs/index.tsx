import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import CatItem from '../../components/CatItem';
import { Annimal, DogsList } from '../../data';
import HomeHeader from '../../components/HomeHeader/HomeHeader';

import { useNavigation } from '@react-navigation/native';
import { Context, Provider } from '../../contexts/context';


export default function Dogs() {

  const { dogsList, setdogsList }: any = useContext(Context);

  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <View style={{ marginHorizontal: 20, marginVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name="dog" size={50} color="#ffee00" />
            <Text style={{ fontFamily: 'Anton_400Regular', fontSize: 36, color: '#FFF', marginHorizontal: 8 }}>
              cachorros
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
          >
            <FontAwesome name="home" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={{ borderBottomColor: '#FFF', borderBottomWidth: 1, marginBottom: 0 }} />

        <FlatList
          data={dogsList}
          renderItem={({ item }) => <CatItem {...item} />}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(7, 7, 41)',
    flex: 1,
    width: '100%',
  },
})