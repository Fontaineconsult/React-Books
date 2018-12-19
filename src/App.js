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
            showSearchPage: false,
            currentInputFieldValue: '',
            searchQuery: []
        };

        this.changeShelf = (event) => {

            event.preventDefault();

            let CurrentShelf = event.target[0].value;
            let ShelfToMoveTo = event.target[1].value;
            let BookID = event.target[2].value;

            let CurrentBook = this.state.books.filter(function(el) {return el.id === BookID});

            CurrentBook[0].shelf = ShelfToMoveTo;

            if (CurrentShelf !== ShelfToMoveTo) {
                BooksAPI.update(CurrentBook[0], ShelfToMoveTo);
                this.setState(prevState => ({

                    [CurrentShelf]: prevState[CurrentShelf].filter(book => {return book.id !== BookID}),
                    [ShelfToMoveTo]: [... prevState[ShelfToMoveTo], CurrentBook[0]],

                }));
            }

        };

        this.addToShelf = (event) => {
            event.preventDefault();

            let ShelfToMoveTo = event.target[0].value;
            let BookID = event.target[1].value;

            let CurrentBook = this.state.searchQuery.filter(function(el) {return el.id === BookID});
            Object.assign(CurrentBook[0], {shelf: ShelfToMoveTo});

            this.setState(prevState => ({
                books: [...prevState.books, CurrentBook[0]],
                [ShelfToMoveTo]: [... prevState[ShelfToMoveTo], CurrentBook[0]]
            }));
            BooksAPI.update(CurrentBook[0], ShelfToMoveTo);





        };

        this.searchBooks = (string) => {

            if (string.length > 0){
                this.setState({
                    showSearchPage: true,
                    currentInputFieldValue: string
                })
            }
            if (string.length === 0){
                this.setState({
                    showSearchPage: false,
                    currentInputFieldValue: ''
                })
            }
        }
    }

  componentWillMount() {

      BooksAPI.getAll().then((books) => this.setState({
          books: books,
          currentlyReading: books.filter(function(el) {return el.shelf === "currentlyReading"}),
          wantToRead: books.filter(function(el) {return el.shelf === "wantToRead"}),
          read: books.filter(function(el) {return el.shelf === "read"}),
      }))

  }
  componentDidUpdate(nextProps, prevState) {

        if (this.state.currentInputFieldValue.length > 0) {
            if (this.state.currentInputFieldValue !== prevState.currentInputFieldValue) {

                BooksAPI.search(this.state.currentInputFieldValue).then(results => this.setState({
                    searchQuery: results
                }))
            }
        }


  }


  render() {

    return (

      <div className="app">
          <SearchBar searchBooks={this.searchBooks}/>
          {this.state.showSearchPage === true && (
              <div>
                  <SearchView
                              books={this.state.searchQuery}
                              addToShelf={this.addToShelf}
                              searchMode={this.state.showSearchPage}
                  />
              </div>
          )}

          {this.state.showSearchPage === false && (

              <div>
                  <CurrentlyReading changeShelf={this.changeShelf}
                                    books={this.state.currentlyReading}
                                    searchMode={this.state.showSearchPage}
                  />
                  <HaveRead changeShelf={this.changeShelf}
                            books={this.state.read}
                            searchMode={this.state.showSearchPage}
                  />
                  <WantToRead changeShelf={this.changeShelf}
                              books={this.state.wantToRead}
                              searchMode={this.state.showSearchPage}
                  />
              </div>
          )}


      </div>
    )
  }
}

export default BooksApp
