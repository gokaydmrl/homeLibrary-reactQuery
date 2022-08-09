const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");
const { authMiddleware } = require("../authMiddleware");

router.get("/books/", authMiddleware, bookController.getBooksHandler);
router.post("/books/", authMiddleware, bookController.createBookHandler);
router.patch("/books/:id", authMiddleware, bookController.patchBookHandler);
router.delete("/books/:id", authMiddleware, bookController.deleteBookHandler);

module.exports = router;
