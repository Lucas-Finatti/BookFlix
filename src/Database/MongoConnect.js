const mongoose = require ('mongoose')
const servermongo = 'mongodb+srv://lucas_finatti:Qweiop.,23@bookflix.lizo5.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(servermongo)
const db = mongoose.connection

module.exports = {db, mongoose}


