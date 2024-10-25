// screens/SignUpScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
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
          <TouchableOpacity
            style={styles.switchButtonInactive}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.switchButtonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.switchButtonActive}>
            <Text style={styles.switchButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder="Enter email or username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
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

export default SignUpScreen;
