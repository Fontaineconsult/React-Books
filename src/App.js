import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookComponent from './components/BookComponent'
import CurrentlyReading from './components/Reading'
import HaveRead from './components/HaveRead'
import WantToRead from './components/WantToRead'
import SearchBar from './components/SearchComponent'
import SearchView from './components/SearchResultViewComponent'





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

            let CurrentShelf = event.target[0].value;
            let ShelfToMoveTo = event.target[1].value;
            let BookID = event.target[2].value;

            let CurrentBook = this.state.books.filter(function(el) {return el.id === BookID})

            CurrentBook[0].shelf = ShelfToMoveTo;

            if (CurrentShelf !== ShelfToMoveTo) {
                BooksAPI.update(CurrentBook[0], ShelfToMoveTo);
                this.setState(prevState => ({

                    [CurrentShelf]: prevState[CurrentShelf].filter(book => {return book.id !== BookID}),
                    [ShelfToMoveTo]: [... prevState[ShelfToMoveTo], CurrentBook[0]],

                }));
            }

        }

        this.searchBooks = (event, state) => {

            this.setState({
                showSearchPage: state
            })

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

    return (

      <div className="app">
          <SearchBar searchBooks={this.searchBooks}/>
          {this.state.showSearchPage === true && (
              <div>
                  <SearchView/>
              </div>
          )}

          {this.state.showSearchPage === false && (
              <div>
                  <CurrentlyReading changeShelf={this.changeShelf}
                                    books={this.state.currentlyReading}/>
                  <HaveRead changeShelf={this.changeShelf}
                            books={this.state.read}/>
                  <WantToRead changeShelf={this.changeShelf}
                              books={this.state.wantToRead} />
              </div>
          )}


      </div>
    )
  }
}

export default BooksApp
