// HomeScreen.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BottomNavigation from '../components/BottomNavigation';

const HomeScreen = () => {
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
          <FontAwesome name="play" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Grid of Cards */}
      <View style={styles.cardGrid}>
        <View style={styles.cardRow}>
          <View style={styles.card} />
          <View style={styles.card} />
        </View>
        <View style={styles.cardRow}>
          <View style={styles.card} />
          <View style={styles.card} />
        </View>
        <View style={styles.cardRow}>
          <View style={styles.card} />
          <View style={styles.card} />
        </View>
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation />
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
  cardGrid: {
    width: '100%',
    marginTop: 20,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#F8F8D0',
    width: '45%',
    height: 100,
    borderRadius: 15,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Elevation for Android
    elevation: 5,
  },
});

export default HomeScreen;
