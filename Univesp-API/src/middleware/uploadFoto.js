const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '../../../uploadimg');
  },
  filename: (req, file, cb) => {
    let nome = Date.now() + "-" + file.originalname;
    cb(null, nome);
  }
});


const uploadImg = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpg",
      "image/png",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Somente imagens com extensão PNG/JPG são permitidas"));
    }
  }
});
module.exports = { uploadImg };
