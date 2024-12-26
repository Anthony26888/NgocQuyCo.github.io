const express = require("express");
const multer = require("multer");
var bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
// Use CORS middleware
app.use(
  cors({
    origin: `http://localhost:${PORT}`, // Replace with your client's origin
    methods: ["GET", "POST", "PATCH", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type"], // Allowed headers
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/Image/Product"); // folder to save images
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${file.originalname}`;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

app.post('/upload-single', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({
      success: true,
      imageUrl: `assets/Image/Product/${req.file.filename}`, // Return the image path
    });
  } else {
    res.status(400).json({ success: false, message: 'Image upload failed' });
  }
});

app.post("/upload-multiple", upload.array("images", 10), (req, res) => {
  try {
    const uploadedFiles = req.files.map((file) => ({
      originalName: file.originalname,
      fileName: file.originalname,
      path: file.path,
    }));

    res
      .status(200)
      .json({ message: "Images uploaded successfully", files: uploadedFiles });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error uploading images" });
  }
});

const readJSONFile = (callback) => {
  const filePath = path.join(__dirname, "api/data.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      callback(err, null);
    } else {
      try {
        const jsonData = JSON.parse(data);
        callback(null, jsonData);
      } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
        callback(parseErr, null);
      }
    }
  });
};

app.get("/data/:arrayName", async (req, res) => {
  const {arrayName} = req.params
  const { type } = req.query;
  const { model } = req.query;
  const { location } = req.query
  readJSONFile((err, jsonData) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      let Filter = jsonData[arrayName];
      if (type) {
        Filter = Filter.filter((value) => value.type === type);
      }
      if (model) {
        Filter = Filter.filter((value) => value.model === model);
      }
      if (location) {
        Filter = Filter.filter((item) => item.location === location);
      }
      res.json(Filter); // Send JSON response
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/data/:arrayName/:id", async (req, res) => {

  const {arrayName, id} = req.params
  const ItemId = id
  readJSONFile((err, jsonData) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    const FilterId = jsonData[arrayName].find((p) => p.id === ItemId);
    if (FilterId) {
      res.json(FilterId);
    } else {
      res
        .status(404)
        .send({ message: `Project with ID ${ItemId} not found` });
    }
  });
});

app.post("/data/post/:arrayName", async (req, res) => {
  const {arrayName} = req.params
  const array = req.body;
  console.log(array);
  if (!array) {
    return res.status(400).json({ message: "Array data is required." });
  }

  readJSONFile((err, jsonData) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      jsonData[arrayName].push(array);
      fs.writeFile(
        "api/data.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            console.error("Error writing to file", err);
            return res
              .status(500)
              .json({ message: "Failed to save array to file" });
          }
          res
            .status(200)
            .json({ message: "Array saved successfully!", data: array });
        }
      );
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.patch("/data/patch/:arrayName/:id", async (req, res) => {
  const array = req.body
  const { arrayName, id }= req.params
  const ProductId = id
  console.log(array);
  if (!array) {
    return res.status(400).json({ message: "Array data is required." });
  }

  readJSONFile((err, jsonData) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      if (!jsonData[arrayName]) {
        return res.status(400).json({ message: `Array "${arrayName}" not found` });
      }
      const itemIndex = jsonData[arrayName].findIndex(item => item.id === ProductId);
      if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });
      jsonData[arrayName][itemIndex] = array
      fs.writeFile(
        "api/data.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            console.error("Error writing to file", err);
            return res
              .status(500)
              .json({ message: "Failed to save array to file" });
          }
          res
            .status(200)
            .json({ message: "Array saved successfully!", data: array });
        }
      );
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.delete("/data/delete/:arrayName/:id", async (req, res) => {
  const { arrayName, id} = req.params;
  const ProductId = id
  readJSONFile((err, jsonData) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      if (!jsonData[arrayName]) {
        return res.status(400).json({ message: `Array "${arrayName}" not found` });
      }
      jsonData[arrayName] = jsonData[arrayName].filter(item => item.id !== ProductId);
      fs.writeFile(
        "api/data.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            console.error("Error writing to file", err);
            return res
              .status(500)
              .json({ message: "Failed to save array to file" });
          }
          res
            .status(200)
            .json({ message: "Array delete successfully!" });
        }
      );
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/data/cart", (req, res) => {
  const filePath = path.join(__dirname, "api/data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.listcart); // Send JSON response
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/data/information", (req, res) => {
  const filePath = path.join(__dirname, "api/data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.information); // Send JSON response
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
