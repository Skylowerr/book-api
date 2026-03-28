
const mongoose = require('mongoose');
require('dotenv').config(); //.env dosyasındaki verilere erişebilmek için buun improt etmemiz lazım



const connectDB = async() =>{ //Bu şekilde yaparak fonksiyonlaştırıyoruz
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log('MongoDB Connected');
        }).catch((e)=>{
            console.log(e)}
        );
        console.log('DB Connected Successfuly');
         
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectDB; //Export ediyoruz diğer dosyalar da kullanabilsin diye (server.js)