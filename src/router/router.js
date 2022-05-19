const router = require( 'express' ).Router();
const Book = require('../domain/Book')
const {db, mongoose} = require('../Database/MongoConnect');
const { route } = require('express/lib/application');

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");
});

var BookSchema = mongoose.Schema({
  title: String,
  sinopse: String
});

const BookModel = mongoose.model("model", BookSchema, "booksColection");

router.get('/', async(req,res)=>{
    const queryResponse = await BookModel.find({})
    res.send(queryResponse)
})

router.get('/find', async(req,res)=>{
    let bookName = req.query.title
    console.log(bookName)
    const queryResponse = await BookModel.find({title: bookName})
    res.send(queryResponse)
})

router.post('/PostBook',async(req,res)=>{
    const body = req.body
    console.log(body)
    const book = new Book(body.title, body.sinopse)
    //const book = new Book("As cronicas de Narnia", "eles entram num armario")
    var doc = new BookModel(book.getPropertiesObject());
    doc.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
    });
    res.send(200)
});

module.exports = router;
// // mongodb+srv://lucas_finatti:Qweiop.,23@bookflix.lizo5.mongodb.net/?retryWrites=true&w=majority