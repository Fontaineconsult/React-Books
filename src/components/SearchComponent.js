import React from 'react'

class SearchBar extends React.Component {




    state = {

        inputField: ''

    };
    inputRegister = (event) => {
        this.setState({
            inputField: event.target.value
        });


    };

    shouldComponentUpdate() {
        console.log("FIRST", this.state.inputField, this.state.inputField.length)

        if (this.state.inputField.length > 0) {
            this.props.searchBooks(this.state.inputField, true)}
        if (this.state.inputField.length === 0){

            this.props.searchBooks(this.state.inputField, false)
        }

    }

    render() {
        return(
            <div>
                <form>
                <input onChange={this.inputRegister} value={this.state.inputField} type="text">
                </input>
                </form>
            </div>
        )}
}



export default SearchBar