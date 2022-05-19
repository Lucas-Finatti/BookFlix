class Book{
    hasError = null
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
    setError(hasError){
        this.hasError = hasError
    }
}

module.exports = Book