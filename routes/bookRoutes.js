const express = require("express");
const router = express.Router();
const { 
    getAllBooks,
    createBook,
    getBook,
    updateBook,
    deleteBook 
}= require("../controllers/bookController");

router.get("/", getAllBooks);

router.post("/", createBook);

router.get("/:id", getBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;