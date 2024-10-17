import Book from "./book.model.js";

// Create a new book
export async function createBook(req, res) {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(200).send({message: "Book created successfully", book: newBook});
    } catch (error) {
        res.status(500).send({message: "Failed to create book", error: error.message});
    }
}

// Get all books
export async function getAllBooks(req, res) {
    try {
        const books = await Book.find().sort({createdAt: -1}); //Sort by newest first
        if(!books) {
            res.status(404).send({message: "No books found"});
        }
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send({message: "Failed to fetch books", error: error.message});
    }
}

// Get a single book
export async function getABook(req, res) {
    try {
        const { id } = req.params
        const book = await Book.findById(id);
        if(!book) {
            res.status(404).send({message: "No books found"});
        }
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({message: "Failed to fetch book", error: error.message});
    }
}

// Update a book
export async function updateBook(req, res) {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if(!updatedBook) {
            res.status(404).send({message: "No books found"});
        }
        res.status(200).send({message: "Book updated successfully", book: updatedBook});

    } catch (error) {
        res.status(500).send({message: "Failed to update book", error: error.message});
    }
}

// Delete a book
export async function deleteBook(req, res) {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook) {
            res.status(404).send({message: "No books found"});
        }
        res.status(200).send({message: "Book deleted successfully"});
    } catch (error) {
        res.status(500).send({message: "Failed to delete book", error: error.message});
    }
}