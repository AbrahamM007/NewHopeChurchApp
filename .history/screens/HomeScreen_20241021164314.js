// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon set
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>NEW HOPE</Text>
        <Image
          source={{ uri: 'https://your-logo-url.com' }} // Replace with your logo URL
          style={styles.logo}
        />
      </View>

      {/* Live Stream Card */}
      <View style={styles.liveCard}>
        <Text style={styles.liveText}>LIVE</Text>
        <Text style={styles.startTimeText}>Started at 9:00</Text>
        <TouchableOpacity style={styles.playButton}>
          <Icon name="play" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Icon Buttons */}
      <View style={styles.iconButtonsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="tv" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="book" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="map-marker" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Prayer Request Button */}
      <TouchableOpacity style={styles.prayerButton}>
        <Text style={styles.prayerButtonText}>Send Prayer Request</Text>
        <Icon name="comment" size={20} color="#fff" style={styles.commentIcon} />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="map-marker" size={20} color="#205E82" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="car" size={20} color="#205E82" />
          <Text style={styles.navText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="bookmark" size={20} color="#205E82" />
          <Text style={styles.navText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="bell" size={20} color="#205E82" />
          <Text style={styles.navText}>Updates</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2FDBB',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#78C257',
    flex: 1,
    textAlign: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  liveCard: {
    backgroundColor: '#B0FFB0',
    width: '90%',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  liveText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
  startTimeText: {
    color: '#000080',
    marginTop: 5,
  },
  playButton: {
    marginTop: 10,
    backgroundColor: '#78C257',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  iconButton: {
    backgroundColor: '#78C257',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prayerButton: {
    backgroundColor: '#78C257',
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  prayerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  commentIcon: {
    marginLeft: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#D2FDBB',
    borderRadius: 25,
    width: '100%',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 20,

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

export default HomeScreen;
