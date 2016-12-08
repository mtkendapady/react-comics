import React from "react";
import { connect } from "react-redux";
import { browserHistory, Link } from "react-router";

import { getComicById } from "../services/comicService";
import { buyComic } from "../ducks/accountDuck";

class Comic extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			comic: {}
		}
	}

	componentWillMount() {
		this.setState( { comic: getComicById( this.props.params.id ) } );
	}

	componentWillReceiveProps( props ) {
		console.log( props );
	}

	buyComic() {
		if ( !this.props.user.loggedIn ) {
			return alert( "Log in please" );
		}

		this.props.dispatch( buyComic( this.state.comic ) );
	}

	render() {
		return (
			<div>
				<h3>{ this.state.comic.company }</h3>
				<h3>{ this.state.comic.price }</h3>
				<img className="comic-pic" src={ this.state.comic.img } />
				<p>{ this.state.comic.about }</p>

				<Link to="/"><button onClick={ this.buyComic.bind( this ) }>Buy this comic!</button></Link>
			</div>
		);
	}
}

export default connect( state => {
	return { user: state.user, account: state.account };
} )( Comic );
