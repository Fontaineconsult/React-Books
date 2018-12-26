import React from 'react'
import BookComponent from "./BookComponent";
import { Link } from 'react-router-dom'
import SearchBar from "./SearchComponent";

class SearchView extends React.Component {




    render(){
        console.log(this.props.currentBookShelf)
        return(
            <div>

                <div className="search-books-bar">


                        <SearchBar searchBooks={this.props.searchBooks} searchmode={this.props.showSearchPage} fieldValue={this.props.fieldValue}/>

                            <Link onClick={this.props.searchPageToggle} className="close-search" to={{
                                pathname: "/",
                            }} >Deactivate Search Mode</Link>


                </div>
                <div className="search-books-results">
                    <div className="books-grid">
                    {Array.isArray(this.props.books) === true && (this.props.books.map(book => <BookComponent book={book} key={book.id} currentBookShelf={this.props.currentBookShelf} addToShelf={this.props.addToShelf} searchMode={this.props.searchMode} /> ))}
                    {Array.isArray(this.props.books) === true & this.props.books.length === 0 && (
                        <span>Search for books to add to your reading lists</span>
                    )}
                    {Array.isArray(this.props.books) === false && (
                        <span>Sorry, your search returned no results</span>
                    ) }
                    </div>
                </div>



                </div>




        )

    }

}

export default SearchView