const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User")
require("dotenv").config();
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist")
const cors = require("cors");
const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

// mongoose.connect() takes 2 arguments:
// 1. Which db is needed to connect (db url)
// 2. Connection options

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log(`✅ MongoDB Connected: ${connectionInstance.connection.host}`);
    // Start server after successful DB connection
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ MONGODB connection error:", error);
    process.exit(1); // Stop the server if DB connection fails
  }
};

connectDB();


// Setup passport-jwt

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
// passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     User.findOne({id: jwt_payload.sub}, function(err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
//     });
// }));

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
      const user = await User.findOne({ id: jwt_payload.sub }).exec();
      if (user) {
          return done(null, user);
      } else {
          return done(null, false);
      }
  } catch (err) {
      return done(err, false);
  }
}));



app.use("/auth",authRoutes);
app.use("/song",songRoutes);
// app.use("/playlist",playlistRoutes);