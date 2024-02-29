// seeds/seed.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Organization = require('../models/organizationModel');

const seedOrganisation = async () => {
    try {
        const organizationExists = await Organization.findOne({ name: 'system' });

        if (!organizationExists) {
            const organization = new Organization({
                name:"system"
            });

            await organization.save();
            console.log('Organisation created successfully.');
        } else {
            console.log('Organisation already exists.');
        }
    } catch (error) {
        console.error('Error seeding Organisation :', error);
    }
};
module.exports ={seedOrganisation}