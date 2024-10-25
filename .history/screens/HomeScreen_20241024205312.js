// HomeScreen.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PolygonIcon from '../assets/icons/Polygon 1.svg';
import Group272Icon from '../assets/icons/Group 272.svg';
import Group273Icon from '../assets/icons/Group 273.svg';
import Group274Icon from '../assets/icons/Group 274.svg';
import PrayerIcon from '../assets/icons/463456.svg';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>NEW HOPE</Text>
      </View>

      {/* Live Stream Card */}
      <View style={styles.liveCard}>
        <Text style={styles.liveText}>LIVE</Text>
        <Text style={styles.startTimeText}>Started at 9:00</Text>
        <TouchableOpacity style={styles.playButton}>
          <PolygonIcon width={24} height={24} />
        </TouchableOpacity>
      </View>

      {/* Icon Buttons */}
      <View style={styles.iconButtonsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Group272Icon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Group273Icon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Group274Icon width={24} height={24} />
        </TouchableOpacity>
      </View>

      {/* Prayer Request Button */}
      <TouchableOpacity style={styles.prayerButton}>
        <Text style={styles.prayerButtonText}>Send Prayer Request</Text>
        <PrayerIcon width={24} height={24} />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Group272Icon width={24} height={24} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Group273Icon width={24} height={24} />
          <Text style={styles.navText}>Watch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Group274Icon width={24} height={24} />
          <Text style={styles.navText}>Apps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <PrayerIcon width={24} height={24} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF0C2',
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

export default HomeScreen;
