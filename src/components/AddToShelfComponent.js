import React from 'react'

class AddToShelf extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: "read",
                      already_added: false,
                      inShelf: 'none'};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        event.preventDefault()
        this.setState({inShelf: event.target.value})


    }

    handleSubmit(event){
        event.preventDefault()
        this.props.addToShelf(event)
    }

    componentWillReceiveProps(nextProps, nextContext) {

        let searchedBookId = this.props.book.id
        let doesbookExist = nextProps.currentBookShelf.filter( function(currentBook) {return currentBook.id === searchedBookId } )


        this.setState({inShelf: doesbookExist[0].shelf})
    }



    componentWillMount() {


        let searchedBookId = this.props.book.id

        let doesbookExist = this.props.currentBookShelf.filter( function(currentBook) {return currentBook.id === searchedBookId } )
        if (doesbookExist.length === 1) {
            this.setState({
                already_added: true,
                inShelf: doesbookExist[0].shelf

            })

        }

    }


    render() {

        return(

            <div className="change-submit-form" onMouseLeave={this.props.showOrHide}>
                <form className="change-submit-form" onSubmit={this.handleSubmit}>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <select size="4" className="change-submit-form" name="shelfSelect" value={this.state.inShelf} onChange={this.handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="none" disabled hidden>hidden</option>
                        <option value="read">Already Read</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                    </select>
                    <button type="submit">Change</button>
                </form>
            </div>

        )}

}
export default AddToShelf