import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookComponent from './components/BookComponent'
import CurrentlyReading from './components/Reading'
import HaveRead from './components/HaveRead'
import WantToRead from './components/WantToRead'
import SearchBar from './components/SearchComponent'
import SearchView from './components/SearchResultViewComponent'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import MainShelf from './components/mainShelfComponent'
import { Router, Redirect } from 'react-router-dom'


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
            console.log(string, string.length);

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
    console.log(this.state.showSearchPage)
    return (

      <div className="app">

          <SearchBar searchBooks={this.searchBooks} fieldValue={this.props.currentInputFieldValue}/>


          <Route exact path='/' render={() => (<MainShelf changeShelf={this.changeShelf}
                                                   searchmode={this.state.showSearchPage}
                                                   CurBooks={this.state.currentlyReading}
                                                   HaveBooks={this.state.read}
                                                   WantBooks={this.state.wantToRead}
                                                   searchPageToggle={this.searchPageToggle}
          />)}/>
          <Route path='/search' render={() => (<SearchView
              books={this.state.searchQuery}
              addToShelf={this.addToShelf}
              searchMode={this.state.showSearchPage}
              onNavigate={this.searchPageToggle}
              searchPageToggle={this.searchPageToggle}
          />)}/>



      </div>
    )

  }
}

export default BooksApp
