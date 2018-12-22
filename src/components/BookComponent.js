import React from 'react'
import ChangeShelf from './ChangeShelfComponent'
import AddToShelf from './AddToShelfComponent'

class BookComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
            console.log(this.props)
            return(
            <div>
                {this.props.book.title}



                {this.props.book.authors.length !== undefined && (this.props.book.authors.map((author) => (<span>{author}</span>)))}

                <img alt="Small Thumb" src={this.props.book.imageLinks.thumbnail}/>

                {this.props.searchMode === false && (
                    <ChangeShelf book={this.props.book} changeShelf={this.props.changeShelf} />
                    )}

                {this.props.searchMode === true && (
                    <AddToShelf book={this.props.book} addToShelf={this.props.addToShelf} />

                )}

            </div>

        )}

}
export default BookComponent