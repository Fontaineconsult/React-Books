import React from 'react'

class ChangeShelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentShelf: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event) {

        this.setState({currentShelf: event.target.value})

    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(event)
        this.props.changeShelf(event)
    }

    componentWillMount() {
        console.log("Mounted", this.props.book.shelf)
        this.setState({currentShelf: this.props.book.shelf})

    }



    render() {

        return(

            <div className="change-submit-form" onMouseLeave={this.props.showOrHide}>
                <form className="change-submit-form" onSubmit={this.handleSubmit}>
                    <input name="CurShelf" type="hidden" value={this.props.book.shelf}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <select size="4" className="change-submit-form" value={this.state.currentShelf} name="shelfSelect" onChange={this.handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="read">Already Read</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                    </select>
                    <button type="submit">Change</button>
                </form>
            </div>

        )}

}
export default ChangeShelf