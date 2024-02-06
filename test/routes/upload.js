const express = require("express");
const router = express.Router();
const multer = require("multer");

const { post } = require("./controller/controllerUpload");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("file"), post);

module.exports = router;
