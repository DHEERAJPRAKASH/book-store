import mongoose, { Schema } from 'mongoose';
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    trending: {
        type: Boolean,
        default: true,
    },
    coverImage: {
        type: String,
        required: true
    },
    oldPrice: {
        type: Number,
    },
    newPrice: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

export default Book;