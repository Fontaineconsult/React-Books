import React from 'react'
import BookComponent from "./BookComponent";

class CurrentlyReading extends React.Component {
    render(){
        return(
            <div><b>currently reading</b>
                {this.props.books.map((book) => <BookComponent
                    changeShelf={this.props.changeShelf}
                    book={book}
                   />)}
            </div>

        )

    }

}

export default CurrentlyReading