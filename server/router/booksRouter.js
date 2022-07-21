const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

router.get("/books", bookController.getBooksHandler);
router.get("/books/:id", bookController.getBookHandler);
router.post("/books", bookController.createBookHandler);

module.exports = router;
