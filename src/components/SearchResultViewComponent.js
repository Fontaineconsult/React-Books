import React from 'react'
import BookComponent from "./BookComponent";
import { Link } from 'react-router-dom'

class SearchView extends React.Component {




    render(){
        console.log(Array.isArray(this.props.books))
        return(
            <div>

                <b>SEARCH MODE ON</b>
                <Link to={{
                    pathname: "/",
                }} >Deactivate Search Mode</Link>


                {Array.isArray(this.props.books) === true && (this.props.books.map(book => <BookComponent book={book} addToShelf={this.props.addToShelf} searchMode={this.props.searchMode} /> ))}
                {Array.isArray(this.props.books) === true & this.props.books.length === 0 && (
                    <span>Search for books to add to your reading lists</span>
                )}
                {Array.isArray(this.props.books) === false && (
                    <span>Sorry, your search returned no results</span>
                ) }




                </div>




        )

    }

}

export default SearchView