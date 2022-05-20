const Book = require('../domain/Book')
const {db, mongoose} = require('../Database/MongoConnect');

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");
});

var BookSchema = mongoose.Schema({
  title: String,
  sinopse: String,
  author: String
});

const BookModel = mongoose.model("model", BookSchema, "booksColection");

class BookServices {
    async findAll() {
        const queryResponse = await BookModel.find({})
        return queryResponse
    };

    async findOne(title, author){
        if (! title || ! author){
            throw new Error('no title or author provided')
        }
        const queryResponse = await BookModel.find({title: title, author: author})
        if (queryResponse.length == 0){
            throw new Error('Book not found')
        } 
        return queryResponse[0]
    };

    async saveOne(body){
        if ( ! body.title || ! body.sinopse || ! body.author ){
            throw new Error('invalid body data.')
        }
        const book = new Book(body.title, body.sinopse, body.author)
        var doc = new BookModel(book.getPropertiesObject());
        let savedDoc = await doc.save()
        console.log(savedDoc)
        if (savedDoc.error){
            book.setError(true)
        }else {
            console.log("Document inserted succussfully!");
        }
        return book
    }
}




module.exports = BookServices