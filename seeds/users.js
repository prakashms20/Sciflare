// seeds/seed.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const organizationModel = require('../models/organizationModel');

const seedAdminUser = async () => {
    try {
        const adminExists = await User.findOne({ role: 'admin' });

        if (!adminExists) {
            const organizationExists = await organizationModel.findOne({ name: 'system' });
            const adminUser = new User({
                username: 'admin',
                password: bcrypt.hashSync('adminpassword', 10), // Hash the password securely
                role: 'admin',
                organization:organizationExists.toJSON()._id
            });

            await adminUser.save();
            console.log('Admin user created successfully.');
        } else {
            console.log('Admin user already exists.');
        }
    } catch (error) {
        console.error('Error seeding admin user:', error);
    }
};
module.exports ={seedAdminUser}