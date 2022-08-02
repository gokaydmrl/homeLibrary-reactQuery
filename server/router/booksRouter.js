const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");
const {authMiddleware} = require("../authMiddleware");

router.get("/books/", authMiddleware, bookController.getBooksHandler);
// router.get("/books/:id", bookController.getBookHandler);
router.post("/books/",authMiddleware, bookController.createBookHandler);
router.patch("/books/:id", authMiddleware ,bookController.patchBookHandler);
router.delete("/books/:id", authMiddleware ,bookController.deleteBookHandler);
// router.get("/books/:ownerID", bookController.getManyBookHandler);
// router.get("/books/usars", bookController.usars);

module.exports = router;
