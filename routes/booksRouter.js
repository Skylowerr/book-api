const express = require('express');
const Book = require('../models/Book'); //Kısaca Book yazarak otomatik tamamlatabilirsin
const bookRouter = express.Router();
module.exports = bookRouter;


//* Router ile app-> Yani ikisi aynı şeyi yapar, Router sadece kodu modüler ve düzenli tutar.

//Create new book
bookRouter.post('/', async(req,res)=>{
    try{
        //req.body === the data the user wants to save
        // console.log(req.body);
        const{title,name,isAvailable,publishedYear, genre,author} = req.body;
        //! Check for duplicate
        const existingBook = await Book.findOne({title, author});
        if(existingBook){
            return res.status(409).json({error: 'Book already exists'})
        }
        //save the new
        const book = await Book.create({
            title,
            author,
            genre,
            publishedYear,
            isAvailable,
        })
        //Send the response to the user
        res.status(201).json(book);


    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//* Fetch all books (GET)
bookRouter.get('/',async (req,res)=>{
    try {
        const books = await Book.find() // ! Fetch all the books
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

//* Fetch by ID (GET)
bookRouter.get('/:bookId',async (req,res)=>{
    try {
        const book = await Book.findById(req.params.bookId); // ! Fetch a book
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

//* Delete a Book
bookRouter.delete('/:bookId',async (req,res)=>{
    try {
        await Book.findByIdAndDelete(req.params.bookId);
        res.status(200).json({message: "Book deleted successfuly"});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

//* Update a Book (findByIdAndUpdate(id, güncellenecekVeri, seçenekler))
bookRouter.put('/:bookId',async (req,res)=>{
    try {
        const bookUpdated = await Book.findByIdAndUpdate(req.params.bookId, req.body, {new:true}); // ! Güncellenek dosya, güncellenecek kısım, güncel hali mi gösterilsin eski hali mi.
        res.status(200).json(bookUpdated);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})



