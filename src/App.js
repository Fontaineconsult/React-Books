import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookComponent from './components/BookComponent'
import CurrentlyReading from './components/Reading'
import HaveRead from './components/HaveRead'
import WantToRead from './components/WantToRead'

class BooksApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
            books: [],
            showSearchPage: false
        };
        this.changeShelf = (event) => {

            event.preventDefault();
            console.log(event.target)
            let CurrentShelf = event.target[0].value;
            let ShelfToMoveTo = event.target[1].value;
            let BookID = event.target[2].value;


            console.log(CurrentShelf, ShelfToMoveTo, BookID)

            let CurrentBook = this.state.books.filter(function(el) {return el.id === BookID})
            CurrentBook[0].id = ShelfToMoveTo;
            console.log("CURRENT BOOK", CurrentBook[0].shelf)


            this.setState(prevState => ({

                [ShelfToMoveTo]: [... prevState[ShelfToMoveTo], CurrentBook[0]],
                [CurrentShelf]: prevState[CurrentShelf].filter(function(book) {return book.id !== BookID})

            }));

            console.log(ShelfToMoveTo)

        }


    }

  componentDidMount() {

      BooksAPI.getAll().then((books) => this.setState({
          books: books,
          currentlyReading: books.filter(function(el) {return el.shelf === "currentlyReading"}),
          wantToRead: books.filter(function(el) {return el.shelf === "wantToRead"}),
          read: books.filter(function(el) {return el.shelf === "read"}),
      }))

  }



  render() {
    console.log(this.state.books)
    return (

      <div className="app">
          <CurrentlyReading changeShelf={this.changeShelf}
                            books={this.state.currentlyReading}/>
          <HaveRead changeShelf={this.changeShelf}
                    books={this.state.read}/>
          <WantToRead changeShelf={this.changeShelf}
                      books={this.state.wantToRead} />

      </div>
    )
  }
}

export default BooksApp
