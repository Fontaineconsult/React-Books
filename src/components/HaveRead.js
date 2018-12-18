import React from 'react'
import BookComponent from "./BookComponent";

class HaveRead extends React.Component {
    render(){
        console.log("HAVEREADPROPS", this.props)
        return(

            <div>
                <b>Have Read Already</b>

                {this.props.books.map((book) => (<BookComponent
                    changeShelf={this.props.changeShelf}
                    book={book}
                    />))}
            </div>

        )

    }

}

export default HaveRead