# Sciflare
# Node.js CRUD Application with Roles & Privileges

This repository contains a Node.js application that implements CRUD (Create, Read, Update, Delete) operations for organizations and users with roles and privileges. The application is built using Express.js for the backend, MongoDB for the database, and Passport.js for authentication.

## Features

- CRUD operations for organizations
- CRUD operations for users with roles and privileges under organizations
- Secure API endpoints using Passport.js
- Role-based access control (RBAC)
- Implementation of relationships between users and organizations
- Database seeding for initial data population

##API Endpoints
Organizations:

- GET /organization: Get all organizations
- GET /organization/:id: Get organization by ID
- POST /organization: Create a new organization
- PUT /organization/:id: Update organization by ID
- DELETE /organization/:id: Delete organization by ID

Users:

- GET /user: Get all users
- GET /user/:id: Get user by ID
- POST /user: Create a new user
- PUT /user/:id: Update user by ID
- DELETE /user/:id: Delete user by ID
  
Authentication:

- POST /auth/login: Login to the application (generates JWT token)
  
##Environment Variables

PORT: Port number for the server (default: 5000)
MONGODB_URI: MongoDB connection URI
Other environment variables as needed for authentication, etc.
