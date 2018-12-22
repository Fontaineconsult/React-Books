import React from 'react'

class AddToShelf extends React.Component {

    render() {

        return(

            <div>
                <span>Add To My Shelf</span>
                <form onSubmit={this.props.addToShelf}>
                    <input name="ToShelf" type="hidden" value={"currentlyReading"}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <button>Currently Reading</button>
                </form>
                <form onSubmit={this.props.addToShelf}>
                    <input name="ToShelf" type="hidden" value={"read"}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <button>Have Read Already</button>
                </form>
                <form onSubmit={this.props.addToShelf}>
                    <input name="ToShelf" type="hidden" value={"wantToRead"}/>
                    <input name="BookID" type="hidden" value={this.props.book.id}/>
                    <button>Want To Read It</button>
                </form>

            </div>

        )}

}
export default AddToShelf