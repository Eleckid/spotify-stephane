const express = require('express');
const routeUser = express.Router()


const controller = require('../controller/controller');

// API Users
routeUser.post('/api/users', controller.createUser);
routeUser.get('/api/users', controller.readUser);
routeUser.put('/api/users/:id', controller.updateUser);
routeUser.delete('/api/users/:id', controller.deleteUser);

module.exports = routeUser