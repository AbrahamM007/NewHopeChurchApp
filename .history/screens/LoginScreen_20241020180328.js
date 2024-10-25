// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Image
          source={{ uri: 'https://your-image-url.com' }} // Replace with the background image URL
          style={styles.headerImage}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.switchContainer}>
          <TouchableOpacity style={styles.switchButtonActive}>
            <Text style={styles.switchButtonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.switchButtonInactive}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.switchButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder="Enter email or username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.socialButtonsContainer}>
          <Button title="Google" color="red" />
          <Button title="Facebook" color="blue" />
          <Button title="Twitter" color="cyan" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff0c2',
  },
  headerBackground: {
    height: 150,
    justifyContent: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  switchButtonActive: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  switchButtonInactive: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    padding: 10,
    borderRadius: 5,
  },
  switchButtonText: {
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 10,
  },
  forgotText: {
    textAlign: 'right',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#B0FFB0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default LoginScreen;
