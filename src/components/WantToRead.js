import React from 'react'
import BookComponent from "./BookComponent";



class WantToRead extends React.Component {
    render(){
        return(
            <div>
                <b>Want To Read It</b>
            {this.props.books.map((book) => <BookComponent
                changeShelf={this.props.changeShelf}
                book={book}
                searchMode={this.props.searchMode}
                />)}
            </div>
        )

    }

}

export default WantToRead