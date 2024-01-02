const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const Painting = require("./models/painting");
const User = require("./models/user");
const bodyParser = require("body-parser");
const path = require('path');

dotenv.config();

const app = express();

path.resolve(__dirname, 'images')
app.use(express.static(__dirname + '/images'));

const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// CORS handling
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true"); // Set to 'true' for credential requests
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(
  session({
    secret: "telos-art-canvas",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        console.log(profile);
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            profilePic: profile.photos[0].value,
          });

          // Save the new user
          user = await newUser.save();
        }

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.get("/auth/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(403).json({ error: "Unauthorised user" });
  }
});

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/redirect", passport.authenticate("google", { successRedirect: "http://localhost:5173", failureRedirect: "auth/login/failed" }), (req, res) => {
  res.status(200).json(req.user);
});

app.get("/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.trace(err);
    }
  });
  // req.session = null;
  // res.clearCookie('connect.sid'); // Clear the connect.sid cookie 
  // res.redirect("http://localhost:5173"); The call is from axios, so redirect is pointless
  res.status(200).json({ logout: 'success' }); // Close the request
});

app.get("/api/gallery", async (req, res) => {
  const painting = await Painting.find();
  res.json(painting);
});

app.post("/api/gallery/new", upload.single("image"), async (req, res) => {
  const painting = await new Painting({
    image: req.file.filename,
    dimensions: req.body.dimensions,
    medium: req.body.medium,
    title: req.body.title,
    text: req.body.text,
    width: req.body.width,
    height: req.body.height,
  });

  painting.save();

  res.json(painting);
});

app.delete("/api/gallery/delete/:id", async (req, res) => {
  const result = await Painting.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.delete("/api/gallery/delete", async (req, res) => {
  const result = await Painting.find();
  result.deleteMany();
  res.json(result);
});

app.put("/api/gallery/:id", async (req, res) => {
  const painting = await Painting.findById(req.params.id);

  (painting.image = req.file.filename),
    (painting.dimensions = req.body.dimensions),
    (painting.medium = req.body.medium),
    (painting.title = req.body.title),
    (painting.text = req.body.text),
    (painting.width = req.body.width),
    (painting.height = req.body.height);

  painting.save();

  res.json(painting);
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Connected to MongoDB. Server is listening on port ${PORT}`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));
