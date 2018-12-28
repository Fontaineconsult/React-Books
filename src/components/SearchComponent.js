import React from 'react'
import {debounce} from 'throttle-debounce';



class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.debounceInput = debounce(300, this.debounceInput)
    }


    inputRegister(event) {
        this.debounceInput(event.target.value);

    };

    debounceInput(value) {
        this.props.searchBooks(value)

    }


    render() {
        return(
            <div className="search-books-input-wrapper">
                <form>
                <input placeholder="Search by title or author" className="search-books-bar" onChange={this.inputRegister.bind(this)} value={this.props.currentInputFieldValue} type="text">
                </input>
                </form>
            </div>

        )}
}



export default SearchBar