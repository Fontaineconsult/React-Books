import React from 'react'
import HaveRead from './HaveRead'
import CurrentlyReading from './Reading'
import WantToRead from './WantToRead'
import { Link } from 'react-router-dom'


class MainShelf extends React.Component {

    render() {

        return(
            <div>
                <Link to={{
                    pathname: "/search",
                }}>Activate Search Mode</Link>

                <span>YOUR COOL BOOKSHELF </span>
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

        )}

}
export default MainShelf