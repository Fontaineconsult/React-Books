import React from 'react'

class BookComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.book.title,
            subtitle: this.props.book.subtitle,
            authors: this.props.book.author,
            pageCount: this.props.book.author,
            categories: this.props.book.categories,
            publisher: this.props.book.publisher,
            id: this.props.book.id,
            currentShelf: this.props.book.shelf

        }
    }



    render() {

            return(

            <div>

                {this.state.title}
                <form onSubmit={this.props.changeShelf}>
                        <input name="CurShelf" type="hidden" value={this.state.currentShelf}/>
                        <input name="ToShelf" type="hidden" value={"currentlyReading"}/>
                        <input name="BookID" type="hidden" value={this.state.id}/>
                        <button>Currently Reading</button>
                </form>
                <form onSubmit={this.props.changeShelf}>
                        <input name="CurShelf" type="hidden" value={this.state.currentShelf}/>
                        <input name="ToShelf" type="hidden" value={"read"}/>
                        <input name="BookID" type="hidden" value={this.state.id}/>
                        <button>Have Read Already</button>
                </form>
                <form onSubmit={this.props.changeShelf}>
                        <input name="CurShelf" type="hidden" value={this.state.currentShelf}/>
                        <input name="ToShelf" type="hidden" value={"wantToRead"}/>
                        <input name="BookID" type="hidden" value={this.state.id}/>
                        <button>Want To Read It</button>
                </form>

            </div>

        )}

}
export default BookComponent