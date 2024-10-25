// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic goes here
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://your-background-image-url.com' }} // Replace with actual URL
        style={styles.backgroundImage}
      />
      <View style={styles.card}>
        <View style={styles.switchContainer}>
          <TouchableOpacity style={styles.switchButtonActive}>
            <Text style={styles.switchButtonTextActive}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.switchButtonInactive}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.switchButtonTextInactive}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter email or username"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>F</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>T</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff0c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    width: '100%',
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '85%',
    padding: 20,
    marginTop: -50,
    elevation: 3,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchButtonActive: {
    flex: 1,
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  switchButtonInactive: {
    flex: 1,
    backgroundColor: '#a9a9a9',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 5,
  },
  switchButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  switchButtonTextInactive: {
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: '#333',
  },
  forgotText: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#1e90ff',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 15,
    color: '#888',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonText: {
    fontSize: 24,
    color: '#888',
  },
});

export default LoginScreen;
