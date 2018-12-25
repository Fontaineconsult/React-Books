import React from 'react'
import BookComponent from "./BookComponent";



class WantToRead extends React.Component {
    render(){
        return(
            <div className="bookshelf">
                <div className="bookshelf-title"><h1>Want to read</h1></div>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                {this.props.WantBooks.map((book) => <BookComponent
                    changeShelf={this.props.changeShelf}
                    book={book}
                    searchMode={this.props.searchMode}
                    />)}
                    </ol>
                </div>
            </div>
        )

    }

}

export default WantToRead