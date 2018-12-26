import React from 'react'
import ChangeShelf from './ChangeShelfComponent'
import AddToShelf from './AddToShelfComponent'

class BookComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChanger: false
        }

        this.showOrHideChanger = () => {
            this.setState(prevState => ({
                showChanger: !prevState.showChanger,

            }))


        }
    }

    render() {

            return(
                <li>
                    <div className="book">
                        <div className="book-top">

                            {this.props.book.imageLinks !== undefined && (<img className="book-cover" alt="Small Thumb" src={this.props.book.imageLinks.thumbnail}/>)}
                            {this.props.searchMode === false && this.state.showChanger === true && (
                                <ChangeShelf book={this.props.book} changeShelf={this.props.changeShelf} showOrHide={this.showOrHideChanger}/>
                            )}
                            {this.props.searchMode === true && this.state.showChanger === true && (
                                <AddToShelf book={this.props.book} addToShelf={this.props.addToShelf} currentBookShelf={this.props.currentBookShelf} showOrHide={this.showOrHideChanger}/>
                            )}

                            <div onClick={this.showOrHideChanger} className="book-shelf-changer"/>
                        </div>
                        <div className="book-title">{this.props.book.title}</div>
                        {this.props.book.authors !== undefined && (this.props.book.authors.map((author) => (<div key={author} className="book-authors">{author}</div>)))}

                    </div>
                </li>

        )}

}
export default BookComponent