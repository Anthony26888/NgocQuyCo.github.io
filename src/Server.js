const express = require("express");
const multer = require("multer");
var bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3000;
// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your client's origin
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
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage: storage });

// Endpoint to handle image upload
app.post("/upload-single", upload.single("image"), (req, res) => {
  try {
    res.status(200).json({
      message: "Image uploaded successfully",
      filePath: req.file.path,
    });
  } catch (err) {
    res.status(500).json({ error: "Error uploading image" });
  }
});

app.post("/upload-multiple", upload.array("images", 10), (req, res) => {
  try {
    const uploadedFiles = req.files.map((file) => ({
      originalName: file.originalname,
      fileName: file.filename,
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

app.get("/data", async (req, res) => {
  readJSONFile((err, jsonData) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      res.json(jsonData); // Send JSON response
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/data/product", async (req, res) => {
  const { type } = req.query;
  const { model } = req.query;

  readJSONFile((err, jsonData) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      let FilterProduct = jsonData.product;
      if (type) {
        FilterProduct = FilterProduct.filter((value) => value.type === type);
      }
      if (model) {
        FilterProduct = FilterProduct.filter((value) => value.model === model);
      }
      res.json(FilterProduct); // Send JSON response
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.post("/product/post", async (req, res) => {
  const  array  = req.body;
  console.log(array)
  if (!array) {
    return res.status(400).json({ message: "Array data is required." });
  }


  fs.writeFile("api/data.json", JSON.stringify(array, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file", err);
      return res.status(500).json({ message: "Failed to save array to file" });
    }
    res.status(200).json({ message: "Array saved successfully!" });
  });
});


app.get("/data/product/:id", async (req, res) => {
  const ProductId = req.params.id;

  readJSONFile((err, jsonData) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    const FilterId = jsonData.product.find((p) => p.id === ProductId);
    if (FilterId) {
      res.json(FilterId);
    } else {
      res
        .status(404)
        .send({ message: `Project with ID ${ProductId} not found` });
    }
  });
});
app.get("/banner-carousels", async (req, res) => {
  const filePath = path.join(__dirname, "api/data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.bannercarousles); // Send JSON response
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/banner-product", async (req, res) => {
  const filePath = path.join(__dirname, "api/data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.bannerProduct); // Send JSON response
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/banner-landing", async (req, res) => {
  const filePath = path.join(__dirname, "api/data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.bannerLanding); // Send JSON response
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/banner-new-product", async (req, res) => {
  const filePath = path.join(__dirname, "api/data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.NewProductLanding); // Send JSON response
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
