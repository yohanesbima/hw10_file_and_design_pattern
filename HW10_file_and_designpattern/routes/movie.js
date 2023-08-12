const express = require("express");
const router = express.Router();
const MovieController = require("../controller/movieController")
const upload = require('../middlewares/multer.js')

router.get("/", MovieController.findAll);
router.get("/:id", MovieController.findOne);
router.post("/", upload.single("image"), MovieController.create);
router.put("/:id", upload.single("image"), MovieController.update);
router.delete("/:id", MovieController.destroy);

module.exports = router;