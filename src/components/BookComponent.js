import React from 'react'
import ChangeShelf from './ChangeShelfComponent'
import AddToShelf from './AddToShelfComponent'

class BookComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

            return(
            <div>
                {this.props.book.title}
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