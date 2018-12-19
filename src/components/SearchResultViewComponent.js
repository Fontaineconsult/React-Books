import React from 'react'
import BookComponent from "./BookComponent";


class SearchView extends React.Component {




    render(){
        console.log(this.props.books)
        return(
            <div>
                {this.props.books.map(book => <BookComponent book={book} addToShelf={this.props.addToShelf} searchMode={this.props.searchMode} /> )}
            </div>

        )

    }

}

export default SearchView