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

    componentDidUpdate(nextProps, nextState) {
        if (nextState.inputField !== this.state.inputField) {
            this.props.searchBooks(this.state.inputField)
        }
    }




    render() {
        return(
            <div>
                <form>
                <input onChange={this.inputRegister.bind(this)} value={this.state.inputField} type="text">
                </input>
                </form>
            </div>
        )}
}



export default SearchBar