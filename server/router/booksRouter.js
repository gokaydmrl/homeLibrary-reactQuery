const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

router.get("/books", bookController.getBooksHandler);
router.get("/books/:id", bookController.getBookHandler);
router.post("/books", bookController.createBookHandler);
router.patch("books/:id", bookController.patchBookHandler)

module.exports = router;
