import React from 'react'
import BookComponent from "./BookComponent";

class CurrentlyReading extends React.Component {
    render(){
        return(
            <div className="bookshelf">
                <div className="bookshelf-title"><h1>Currently reading</h1></div>
                <div className="bookshelf-books" >
                    <ol className="books-grid">
                    {this.props.curbooks.map((book) => <BookComponent
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

export default CurrentlyReading