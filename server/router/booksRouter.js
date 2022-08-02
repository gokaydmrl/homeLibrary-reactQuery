const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");
const userController = require("../controllers/userController");

router.get("/books/", bookController.getBooksHandler);
// router.get("/books/:id", bookController.getBookHandler);
router.post("/books/", bookController.createBookHandler);
router.patch("/books/:id", bookController.patchBookHandler);
router.delete("/books/:id", bookController.deleteBookHandler);
// router.get("/books/:userID", bookController.getOneBookHandler);
router.get("/books/usars", bookController.usars);


module.exports = router;
