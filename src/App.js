import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchView from './components/SearchResultViewComponent'
import { Route } from 'react-router-dom'
import MainShelf from './components/mainShelfComponent'



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
            let BookID = event.target[1].value;
            let ShelfToMoveTo = event.target[2].value;

            let CurrentBook = this.state.books.filter(function(el) {return el.id === BookID});



            CurrentBook[0].shelf = ShelfToMoveTo;

            if (CurrentShelf !== ShelfToMoveTo) {
                BooksAPI.update(CurrentBook[0], ShelfToMoveTo).then(this.setState(prevState => ({

                    [CurrentShelf]: prevState[CurrentShelf].filter(book => {return book.id !== BookID}),
                    [ShelfToMoveTo]: [... prevState[ShelfToMoveTo], CurrentBook[0]],
                })));

            }

        };

        this.addToShelf = (event) => {
            event.preventDefault();
            let BookID = event.target[0].value;
            let ShelfToMoveTo = event.target[1].value;

            let CurrentBook = this.state.searchQuery.filter(function(el) {return el.id === BookID});

            let doesBookExist = this.state.books.find(function(CurrentBook) {return CurrentBook.id === BookID});

            if (doesBookExist === undefined) {
                Object.assign(CurrentBook[0], {shelf: ShelfToMoveTo});

                BooksAPI.update(CurrentBook[0], ShelfToMoveTo).then(
                    this.setState(prevState => ({
                        books: [...prevState.books, CurrentBook[0]],
                        [ShelfToMoveTo]: [... prevState[ShelfToMoveTo], CurrentBook[0]]
                    }))

                );

            } else {
                let doesBookExistIndex = this.state.books.findIndex(function(CurrentBook) {return CurrentBook.id === BookID})
                let currentShelf = doesBookExist.shelf;
                if (currentShelf !== ShelfToMoveTo) {
                    CurrentBook[0].shelf = ShelfToMoveTo
                    let newBooksState = this.state.books
                    newBooksState.splice(doesBookExistIndex, 1, CurrentBook[0])

                    this.setState(prevState =>({

                        [currentShelf]: prevState[currentShelf].filter(book => {return book.id !== BookID}),
                        [ShelfToMoveTo]: [... prevState[ShelfToMoveTo], CurrentBook[0]],
                        books: newBooksState


                    }));
                    BooksAPI.update(doesBookExist, ShelfToMoveTo);
                }

            }
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
                    currentInputFieldValue: string,
                    searchQuery: []
                })
            }
        };
        this.clearSearchResults = () => {
            this.setState({
                searchQuery: []
            })
        }
        this.searchPageToggle = () => {

            this.setState(prevState => ({
                showSearchPage: !prevState.showSearchPage,

            }))

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
          <Route exact path='/' render={() => (<MainShelf changeShelf={this.changeShelf}
                                                   searchmode={this.state.showSearchPage}
                                                   CurBooks={this.state.currentlyReading}
                                                   HaveBooks={this.state.read}
                                                   WantBooks={this.state.wantToRead}
                                                   searchPageToggle={this.searchPageToggle}
                                                   clearResults={this.clearSearchResults}

          />)}/>

          <Route path='/search' render={() => (<SearchView
              books={this.state.searchQuery}
              currentBookShelf={this.state.books}
              addToShelf={this.addToShelf}
              searchMode={this.state.showSearchPage}
              searchPageToggle={this.searchPageToggle}
              searchBooks={this.searchBooks}
              fieldValue={this.state.currentInputFieldValue}
              clearResults={this.clearSearchResults}
          />)}/>
          </div>


    )

  }
}

export default BooksApp
