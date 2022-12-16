const express = require('express');
const routeSong = express.Router()

const controller = require('../controller/controller');
// API song
routeSong.post('/api/songs', controller.createSong);
routeSong.get('/api/songs', controller.readSong);
routeSong.put('/api/songs/:id', controller.updateSong);
routeSong.delete('/api/songs/:id', controller.deleteSong);

module.exports = routeSong;