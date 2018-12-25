import React from 'react'
import HaveRead from './HaveRead'
import CurrentlyReading from './Reading'
import WantToRead from './WantToRead'
import { Link } from 'react-router-dom'


class MainShelf extends React.Component {

    render() {

        return(
            <div className="list-books">
                <div className="list-books-title"><h1> Your Cool Bookshelf</h1>  </div>
                <div onClick={this.props.clearResults} className="open-search1">
                    <Link className="open-search" to={{pathname: "/search"}}>Activate Search Mode</Link>
                </div>
                <div className="list-books-content">
                        <CurrentlyReading changeShelf={this.props.changeShelf}
                                          curbooks={this.props.CurBooks}
                                          searchMode={this.props.searchmode}
                        />

                        <HaveRead changeShelf={this.props.changeShelf}
                                  HaveBooks={this.props.HaveBooks}
                                  searchMode={this.props.searchmode}
                        />

                        <WantToRead changeShelf={this.props.changeShelf}
                                    WantBooks={this.props.WantBooks}
                                    searchMode={this.props.searchmode}
                        />
                </div>

            </div>

        )}

}
export default MainShelf