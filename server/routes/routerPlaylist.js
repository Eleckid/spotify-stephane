const express = require('express');
const routePlaylist = express.Router()

const controller = require('../controller/controller');

// API Playlist
routePlaylist.post('/api/playlists', controller.createPlaylist);
routePlaylist.get('/api/playlists', controller.readPlaylist);
routePlaylist.put('/api/playlists/:id', controller.updatePlaylist);
routePlaylist.delete('/api/playlists/:id', controller.deletePlaylist);

module.exports = routePlaylist;