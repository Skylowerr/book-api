const mongoose = require('mongoose');

//Book Schema
const bookSchema = new mongoose.Schema({
    title : {type : String, required : [true, "Book Title is required"]},
    author : {type : String, required : [true, "Author name is required"]},
    genre : String,
    publishedYear : {
        type: Number,
        required : [true, "Published year is required"],
    },
    isAvailable : {
        type : Boolean,
        default : true,
    },
},
{timestamps : true}
);

//Compile the schema to form model
const Book = mongoose.model("Book",bookSchema); //Schema'yı kullanılabilir bir modele dönüştürür. "Book" ismi MongoDB'de otomatik books koleksiyonuna dönüşür (küçük harf + çoğul).

module.exports = Book; //Modeli dışarı aktarır, başka dosyalarda kullanabilirsin: