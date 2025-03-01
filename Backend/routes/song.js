const express = require("express")
const passport = require("passport");
const router = express.Router();
const Song = require("../models/Song")
const User = require("../models/User");

// upload song.
router.post("/create",passport.authenticate("jwt",{session : false}),
async(req,res)=> {
  const {name,thumbnail,track}= req.body;
  if(!name || !thumbnail || !track){
    return res.status(301).json({err : "Insufficient details to create song."});
  }


  const artist = req.user._id;

  const songDetails = {name,thumbnail,track,artist};
  const createdSong = await Song.create(songDetails);
  return res.status(200).json(createdSong);


});


// Get route to get all songs I have published. // Custom API for song
router.get(
  "/get/mysongs",
  passport.authenticate("jwt", {session: false}),
  async (req, res) => {
      // We need to get all songs where artist id == currentUser._id
      const songs = await Song.find({artist: req.user._id}).populate(
          "artist"
      );
      return res.status(200).json({data: songs});
  }
);

// Get route to get all songs any artist has published
// I will send the artist id and I want to see all songs that artist has published
router.get("/get/artist/:artistId",passport.authenticate("jwt",{session : false}),
  async (req,res) => {
    const {artistId} = req.params;
    // we can check if the artist does not exist
    const artist = await User.findOne({_id:artistId});
    if(!artist){
      return res.status(301).json({err:"Artist does not exist"});
    }
    const songs = await Song.find({artist:artistId});
    return res.status(200).json({data:songs});
  }
);

// Get route to get a single song by name

router.get("/get/songname/:songName",passport.authenticate("jwt",{session : false}),
async (req,res) =>{
  const {songName} = req.params;
  const songs = await Song.find({name: songName});
  return res.status(200).json({data : songs});
}
);

module.exports = router;


// Chat gpt version
// const express = require("express");
// const passport = require("passport");
// const router = express.Router();
// const Song = require("../models/Song");
// const User = require("../models/User");

// router.post("/create", passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     try {
//       const { name, thumbnail, track } = req.body;
//       if (!name || !thumbnail || !track) {
//         return res.status(400).json({ err: "Insufficient details to create song." });
//       }
//       const artist = req.user._id;
//       const songDetails = { name, thumbnail, track, artist };
//       const createdSong = await Song.create(songDetails);
//       return res.status(200).json(createdSong);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ err: "Internal Server Error" });
//     }
//   }
// );

// // Get route to get all songs I have published
// router.get("/get/mysongs", passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     try {
//       const songs = await Song.find({ artist: req.user._id });
//       return res.status(200).json({ data: songs });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ err: "Internal Server Error" });
//     }
//   }
// );

// // Get route to get all songs any artist has published
// router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     try {
//       const { artistId } = req.params;
//       const artist = await User.findOne({ _id: artistId });
//       if (!artist) {
//         return res.status(404).json({ err: "Artist does not exist" });
//       }
//       const songs = await Song.find({ artist: artistId });
//       return res.status(200).json({ data: songs });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ err: "Internal Server Error" });
//     }
//   }
// );

// // Get route to get a single song by name
// router.get("/get/songname/:songName", passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     try {
//       const { songName } = req.params;
//       const songs = await Song.find({ name: songName });
//       return res.status(200).json({ data: songs });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ err: "Internal Server Error" });
//     }
//   }
// );

// module.exports = router;
