<h1 align="center"> BookFlix </h1>

<h4 align="center"> an application with the objective of storing books, so that anyone can have access to them. </h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a>
</p>

## Key Features

* Receive books data to storing in a cloud database.
* Create an API to share this data

## How To Use

To clone and run this script, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) installed on your environment and a cloud database in [MongoDB](https://www.mongodb.com/pt-br). From your command line:

### Cloning and installing

```bash
# Clone this repository
$ git clone https://github.com/Lucas-Finatti/BookFlix.git

# Go into the repository folder
$ cd BookFlix

# Install dependencies
$ npm install

```

### Usage exemple


#### With the author or book name add or search a book.:
Below is an example of how to use the script to add or search a book in API.

In an bash or terminal, inside the project root directory runs:

```bash
npm run run 
```

The script will run the server, then you just need to send a request as a JSON:

```Post EX:
addres: http://localhost:3000/PostBook
{"title": "Dorian Gray", "sinopse": "the gorgeous young Dorian Gray, the protagonist, becomes a model for a painting by the artist Basil Hallward. 
Presenter Dorian to Lord Henry Wotton, who makes him aware of his beauty and the value of his youth and initiates him into a world of vice and debauchery.",
"author": "Oscar Wild"}
```
```Get One EX:
http://localhost:3000/find?author=Oscar Wild
or
http://localhost:3000/find?title=Dorian Gray
```

## Credits

This software uses the following open source packages:

- [express](https://expressjs.com/pt-br/)
- [mongoose](https://mongoosejs.com/)
- [multer](https://www.npmjs.com/package/multer)
