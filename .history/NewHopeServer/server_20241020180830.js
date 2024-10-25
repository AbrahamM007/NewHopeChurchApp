// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'users.json');

app.use(bodyParser.json());

// Helper function to read user data from the JSON file
const readUserData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

// Helper function to write user data to the JSON file
const writeUserData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Endpoint for user registration
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  const users = readUserData();

  // Check if the user already exists
  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Add the new user
  users.push({ email, password });
  writeUserData(users);
  res.status(201).json({ message: 'User registered successfully' });
});

// Endpoint for user login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = readUserData();

  // Check if the user exists and password matches
  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
