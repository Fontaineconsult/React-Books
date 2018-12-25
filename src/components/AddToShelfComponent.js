import React from 'react'

class AddToShelf extends React.Component {

    render() {

        return(

            <div className="change-submit-form" onMouseLeave={this.props.showOrHide}>

                <form onSubmit={this.props.addToShelf}>
                    <input name="ToShelf" type="hidden" value={"currentlyReading"}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <input type="submit" value="Currently Reading"/>
                </form>
                <form onSubmit={this.props.addToShelf}>
                    <input name="ToShelf" type="hidden" value={"read"}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <input name="Already Read" value="Already Read" type="submit"/>

                </form>
                <form onSubmit={this.props.addToShelf}>
                    <input name="ToShelf" type="hidden" value={"wantToRead"}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <input type="submit" value="Want to Read"/>
                </form>

            </div>

        )}

}
export default AddToShelf