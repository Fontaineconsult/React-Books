import React from 'react'

class BookComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

            return(

            <div>

                {this.props.book.title}

                <form onSubmit={this.props.changeShelf}>
                        <input name="CurShelf" type="hidden" value={this.props.book.shelf}/>
                        <input name="ToShelf" type="hidden" value={"currentlyReading"}/>
                        <input name="BookID" type="hidden" value={this.props.book.id}/>
                        <button>Currently Reading</button>
                </form>
                <form onSubmit={this.props.changeShelf}>
                        <input name="CurShelf" type="hidden" value={this.props.book.shelf}/>
                        <input name="ToShelf" type="hidden" value={"read"}/>
                        <input name="BookID" type="hidden" value={this.props.book.id}/>
                        <button>Have Read Already</button>
                </form>
                <form onSubmit={this.props.changeShelf}>
                        <input name="CurShelf" type="hidden" value={this.props.book.shelf}/>
                        <input name="ToShelf" type="hidden" value={"wantToRead"}/>
                        <input name="BookID" type="hidden" value={this.props.book.id}/>
                        <button>Want To Read It</button>
                </form>

            </div>

        )}

}
export default BookComponent