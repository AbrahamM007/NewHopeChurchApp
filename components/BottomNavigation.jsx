// components/BottomNavigation.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <FontAwesome name="home" size={20} color="#205E82" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Watch')}>
        <FontAwesome name="tv" size={20} color="#205E82" />
        <Text style={styles.navText}>Watch</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Apps')}>
        <AntDesign name="appstore-o" size={20} color="#205E82" />
        <Text style={styles.navText}>Apps</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
        <AntDesign name="user" size={20} color="#205E82" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#D2FDBB',
    borderRadius: 25,
    width: '100%',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 20,

    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    // Elevation for Android
    elevation: 6,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#205E82',
    marginTop: 5,
  },
});

export default BottomNavigation;
