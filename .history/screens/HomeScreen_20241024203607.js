// HomeScreen.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
          <Image
            source={require('../assets/icons/Polygon 1.svg')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      {/* Icon Buttons */}
      <View style={styles.iconButtonsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/icons')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/book.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../assets/location.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      {/* Prayer Request Button */}
      <TouchableOpacity style={styles.prayerButton}>
        <Text style={styles.prayerButtonText}>Send Prayer Request</Text>
        <Image
          source={require('../assets/prayer.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>
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
  iconImage: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
