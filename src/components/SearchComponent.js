import React from 'react'

class SearchBar extends React.Component {



    inputRegister = (event) => {

        this.props.searchBooks(event.target.value)

    };


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