require('dotenv').config();
const mongoose = require('mongoose');

// Replace <password> with your actual password
const mongoURI = 'mongodb+srv://sanjaysathya516:sanjay516@awtc.sb5ija6.mongodb.net/nautical_users?retryWrites=true&w=majority&appName=awtc';

// Connect to the MongoDB database
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for your collection (sanjaysatya516)
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

// Create a model from the schema
const User = mongoose.model('sanjaysatya516', userSchema);

// Example of creating a new user
const newUser = new User({
  name: 'John Doe',
  username: 'johndoe',
  password: 'securepassword123',
});

newUser.save()
  .then(() => console.log('User saved'))
  .catch(err => console.error('Error saving user:', err));
