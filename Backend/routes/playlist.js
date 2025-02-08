// This page is to add the functionality of the playlist : skipping this
// const express = require("express");
// const passport = require("passport");
// const router = express.Router();
// const Playlist = require("../models/Playlist");
// const User = require("../models/User");

// // Route 1 : Create a playlist 
// router.post("/create",passport.authenticate("jwt",{session:false}),
// async (req,res) => {
//   const currentUser = req.user;
//   const {name,thumbnail,songs} = req.body;
//   if(!name || !thumbnail || !songs){
//     return res.status(301).json({err:"Insufficient data !"});
//   }
//   const playlistData = {name,
//     thumbnail,
//     songs,
//     owner:currentUser._id,
//     collaborators : [],
//   };
//   const playlist = await Playlist.create(playlistData);
//   return res.status(200).json(playlist);
// }
// );

// // Route 2 : Get a playlist by ID
// // we will get a the playlist ID as a route parameter and we will return the playlist having that id
// // / something1/something2 -> matches exactly
// // / something1/something3 -> this will not work
// // when we put colon it acts like variable,
// router.get("/get/playlist/:playlistId", passport.authenticate("jwt",{session:false}),
// async (req,res) => {
//   const playlistId = req.params.playlistId;
//   const playlist = await Playlist.findOne({_id:playlistId});
//   if(!playlist){
//     return res.status(301).json({err: "Invalid Id"});
//   }
//   return res.status(200).json(playlist);
// });


// // Get all playlists made by an artist
// router.get("/get/artist/:artistId", passport.authenticate("jwt",{session:false}),
// async (req,res)=>{
//   const artistId = req.params.artistId;
//   // Check if artist with given arrtist Id exists 
//   const artist = await UserActivation.findOne({_id:artistId});
//   if(!artist){
//     return res.status(304).json({err:"Invalid Artist ID"});
//   }

//   const playlists = await Playlist.find({owner:artistId});
//   return res.status(200).json({data:playlists});
// });

// // Add a song to a playlist

// router.post("/add/song",passport.authenticate("jwt",{session: false}),
// async (req,res) => {
//   const currentUser = req.user;
//   const {playlistId,songId} = req.body;
//   const playlist = await Playlist.findOne({_id:playlistId});
//   if(!playlist){
//     return res.status(304).jsjon({err:"playlist does not exist"});
//   }

// })