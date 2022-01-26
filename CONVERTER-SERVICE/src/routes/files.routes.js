const { Router } = require("express");
const router = Router();
const Files = require("../controllers/files.controller");
const { uploadFileMiddleware } = require("../middlewares/multer.middleware");

router.get("/", Files.getAllFiles);
router.get("/:fileName", Files.downloadFile);
router.post("/", uploadFileMiddleware(), Files.uploadFiles);
router.delete("/:id", Files.deleteFile);

module.exports = router;
