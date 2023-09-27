const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Painting = require("./models/painting");
const bodyParser = require("body-parser");

const app = express();

// const allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }

// app.use(allowCrossDomain);

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/art-gallery/src/images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + "_" + file.originalname)
    }
})

const upload = multer({ storage: storage }); 

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 6001;

app.get('/api/gallery', async (req,res) => {
    const painting = await Painting.find();

    res.json(painting);
});

app.post('/api/gallery/new', upload.single("image"), async (req, res) => {
    // const image = req.body.image
   const painting = await new Painting({
        image: req.file.filename,
        //     data: image,
        //     contentType: 'image/png' // Set the appropriate content type based on the image type you're receiving
        //   
        dimensions: req.body.dimensions,
        medium: req.body.medium,
        title: req.body.title,
        text: req.body.text,
        width: req.body.width,
        height: req.body.height
    });
        
    painting.save();

    res.json(painting);
})

app.delete('/api/gallery/delete/:id', async(req, res) => {
    const result = await Painting.findByIdAndDelete(req.params.id);
    res.json(result);
});

app.delete('/api/gallery/delete', async(req, res) => {
    const result = await Painting.find();
    result.deleteMany();
    res.json(result);
});

app.put('/api/gallery/:id', async(req, res) => {
    const painting = await Painting.findById(req.params.id);
    painting.image = req.body.image,
    painting.dimensions = req.body.dimensions,
    painting.medium = req.body.medium,
    painting.title = req.body.title,
    painting.text = req.body.text,
    painting.width = req.body.width,
    painting.height = req.body.height

    painting.save();

    res.json(painting);
});


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Connected to MongoDB. Server is listening on port ${PORT}`));
})
.catch((error) => console.log(`${error} did not connect`));