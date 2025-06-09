const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 5000;
const User = require("./models/worker");
const multer = require(`multer`);
const Accepted = require("./models/request");

const router = require(`./routes/user`);
const appRouter = require("./routes/app");
const adminRouter = require("./routes/admin");


const { restrictToLoginUserOnly } = require("./middlewares/auth");

const complaindata = require(`./models/complain`);

//Connecting MongoDb
const ConnectTOMongoDB = require("./connections");
ConnectTOMongoDB();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static("public"));
app.use("/uploads", express.static("public/uploads"));
//  ,restrictToLoginUserOnly,
//setting up veiw engine as ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

// Middleware to Fetch User from UID in Cookie
app.use(async (req, res, next) => {
  try {
    const uid = req.cookies?.id;
    if (uid) {
      const user = await User.findById(uid); // Find user by UID
      res.locals.user = user || null; // Store user in res.locals
    } else {
      res.locals.user = null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.locals.user = null;
  }
  next();
});

//After accepting
app.post("/home/submission", async (req, res) => {
  try {
    const { id } = req.body;

    // Mark the complaint as accepted (update database or move it)
    await Accepted.updateOne(
      { userId: req.cookies.id },
      { $push: { complains: id }},
      { upsert: true }
    );

    res.json({ success: true });
  } catch (error) {
    console.error("Error accepting complaint:", error);
    res.json({ success: false });
  }
});


app.use("/home", appRouter);
app.use("/", router);
app.use("/admin",adminRouter);

//Redirecting To map for location
app.get("/map/:id", async (req, res) => {
  const complainId = req.params.id;
  // const locationString = req.params.location;  // Extracting location from URL

  const complain = await complaindata.findById(complainId);

  const locationvalue = complain.Location;

  // Assuming location is in the format: "Lat: 18.464388, Lon: 73.867729"
  const [latPart, lonPart] = locationvalue
    .replace("Lat: ", "")
    .replace("Lon: ", "")
    .split(", ");

  const latitude = parseFloat(latPart);
  const longitude = parseFloat(lonPart);

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).send("Invalid location format");
  }

  // Generate Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  // Redirect user to Google Maps
  res.redirect(googleMapsUrl);
});

app.get(`/home/getmap`, (req, res) => {
  res.render(`map.ejs`);
});

app.get(`/submit`, (req, res) => {
  res.render(`submission`);
});

app.get(`/reward`, (req, res) => {
  res.render(`rewards`);
});

//Storing image by multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads"); // Destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage: storage });

//Saving form data and Uploading using multer (form for new garbage complian)
app.post(`/fillcomplain`, upload.single("Image"), async (req, res) => {
  const { Name, Area, Location, Image } = await req.body;
  complaindata.create({
    Name,
    Area,
    Location,
    Image: req.file.filename,
  });
  res.redirect(`/home`);
});

app.post('/mark-completed/:id', async (req, res) => {
  try {
    await complaindata.findByIdAndUpdate(req.params.id, { status: 'complete' });
    res.redirect('/home/submission'); // or wherever your page is
  } catch (err) {
    console.error(err);
    res.status(500).send("Error marking complaint as completed");
  }
});


app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});
