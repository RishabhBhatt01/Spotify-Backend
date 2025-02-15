const mongoose = require("mongoose");
// How to create a model
// Step 1 : require mongoose
// Step 2 : create a mongoose schema(Structure of a user)
// Step 3 : Create a model

const User = new mongoose.Schema({
  firstName : {
    type: String,
    required : true
  },
  lastName : {
    type : String,
    required : false
  },
  email : {
    type : String,
    required : true
  },
  username : {
    type : String,
    required : true
  },
  likedSongs : {
    // will fill later
    type : String,
    default : ""
  },
  likedPlaylists : {
    type :String,
    default : ""
  },
  subscribedArtists:{
    type : String,
    default : ""
  }
});

const UserModel = mongoose.model("User",User);
module.exports = UserModel;
