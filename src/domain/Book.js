class Book{
    hasError = null
    constructor(title,sinopse,author){
        this.title = title,
        this.sinopse = sinopse,
        this.author = author
    }
    getPropertiesObject(){
        return{
            title: this.title,
            sinopse: this.sinopse,
            author: this.author
        }
    }
    setError(hasError){
        this.hasError = hasError
    }
}

module.exports = Book