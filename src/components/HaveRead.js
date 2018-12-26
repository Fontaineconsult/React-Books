import React from 'react'
import BookComponent from "./BookComponent";

class HaveRead extends React.Component {
    render(){
        console.log("HAVEREADPROPS", this.props)
        return(
            <div className="bookshelf">
                <div className="bookshelf-title"><h1>Already Read</h1></div>
                <div className="bookshelf-books">

                    <ol className="books-grid">
                    {this.props.HaveBooks.map((book) => (<BookComponent
                        key = {book.id}
                        changeShelf={this.props.changeShelf}
                        book={book}
                        searchMode={this.props.searchMode}
                        />))}
                    </ol>
                </div>
            </div>

        )

    }

}

export default HaveRead