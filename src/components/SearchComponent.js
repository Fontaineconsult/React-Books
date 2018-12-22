import React from 'react'

class SearchBar extends React.Component {



    inputRegister = (event) => {

        this.props.searchBooks(event.target.value)

    };



    render() {
        return(
            <div>

                <form>
                <input onChange={this.inputRegister.bind(this)} value={this.props.currentInputFieldValue} type="text">
                </input>
                </form>
            </div>
        )}
}



export default SearchBar