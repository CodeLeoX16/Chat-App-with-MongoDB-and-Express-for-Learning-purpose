//initialization data base
const mongoose = require('mongoose');
const chat = require('./models/chat.js');
//connection setup
main()
.then(() => {console.log("connection successful");

})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
}
let allChat = [
    {
        from: "John",
        to: "Doe",
        message: "Hello Doe",
        createdAt: Date.now()
    },
    {
        from: "Doe",
        to: "John",
        message: "Hello John",
        createdAt: Date.now()
    },
    {
        from: "John",
        to: "Doe",
        message: "How are you?",
        createdAt: Date.now()
    },
    {
        from: "Doe",
        to: "John",
        message: "I am fine, thank you!",
        createdAt: Date.now()
    }
];
//inserting data
chat.insertMany(allChat);