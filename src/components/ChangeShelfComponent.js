import React from 'react'

class ChangeShelf extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        return(

            <div className="change-submit-form" onMouseLeave={this.props.showOrHide}>
                <form onSubmit={this.props.changeShelf}>
                    <input name="CurShelf" type="hidden" value={this.props.book.shelf}/>
                    <input name="ToShelf" type="hidden" value={"currentlyReading"}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <input type="submit" value="Currently Reading"/>
                </form>
                <form onSubmit={this.props.changeShelf}>
                    <input name="CurShelf" type="hidden" value={this.props.book.shelf}/>
                    <input name="ToShelf" type="hidden" value={"read"}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <input name="Already Read" value="Already Read" type="submit"/>
                </form>
                <form onSubmit={this.props.changeShelf}>
                    <input name="CurShelf" type="hidden" value={this.props.book.shelf}/>
                    <input name="ToShelf" type="hidden" value={"wantToRead"}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <input type="submit" value="Want to Read"/>
                </form>


            </div>

        )}

}
export default ChangeShelf