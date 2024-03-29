const router = require( 'express' ).Router();
const BookServices = require('../service/BookServices')
const bookServices = new BookServices()

router.get('/', async(req,res)=>{
    console.log(BookServices)
    const response = await bookServices.findAll()
    console.log(response)
    res.send(response).status(200)
})

router.get('/find', async(req,res)=>{
    let title = req.query.title
    let author = req.query.author
    let status = 200
    let response
    try {
        response = await bookServices.findOne(title, author)
    } catch(error){
        status = 400
        response = error.message
    }
    res.status(status).send(response)
})

router.post('/PostBook',async(req,res)=>{
    const body = req.body
    let bookResponse
    try {
        bookResponse = await bookServices.saveOne(body)
        console.log(bookResponse)
    }catch(error){
        res.status(400).send(error.message)
    }
    let status = 200
    if (bookResponse.hasError){
        status = 500
    } 
    res.send(body).status(status)
});

module.exports = router;
