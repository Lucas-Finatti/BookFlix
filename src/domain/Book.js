class Book{
    constructor(title,sinopse){
        this.title = title,
        this.sinopse = sinopse
    }
    getPropertiesObject(){
        return{
            title: this.title,
            sinopse: this.sinopse
        }
    }
}

module.exports = Book