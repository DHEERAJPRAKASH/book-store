import { Router } from 'express';
import {createBook, deleteBook, getABook, getAllBooks, updateBook} from "./book.controller.js";

const router = Router();


// POST a Book
router.post('/create-book', createBook);

// GET all Books
router.get('/', getAllBooks);

// GET a single Book
router.get('/:id', getABook);

// PUT (Update) a Book
router.put('/edit/:id', updateBook);

// DELETE a Book
router.delete('/delete/:id', deleteBook);

export default router;