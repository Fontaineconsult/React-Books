import React from 'react'

class ChangeShelf extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        return(

            <div className="change-submit-form" onMouseLeave={this.props.showOrHide}>
                <form className="change-submit-form" onSubmit={this.props.changeShelf}>
                    <input name="CurShelf" type="hidden" value={this.props.book.shelf}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <select size="3" className="change-submit-form" name="shelfSelect">
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