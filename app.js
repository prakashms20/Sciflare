const express = require('express');
const passport = require('./config/passport-config'); // Import the Passport configuration
const cors = require('cors');
const db = require('./config/db');
const Organization = require('./routes/organization');
const User = require('./routes/user');
const bodyParser = require('body-parser');
const { seedAdminUser } = require('./seeds/users');
const authRoutes = require('./routes/auth');
const { seedOrganisation } = require('./seeds/organization');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

app.use(passport.initialize()); // Initialize Passport middleware

// // Add your route definitions
app.use('/auth', authRoutes)

app.use('/organization', passport.authenticate("jwt",{session:false}),Organization);
app.use('/user', User);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
  db.connect()
  console.log(`Server is running on port ${PORT}`);
  await seedOrganisation()
  await seedAdminUser()
});

module.exports = app; // Export app for testing or other purposes
