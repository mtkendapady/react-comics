import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import { setUser } from "../ducks/userDuck";

class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			userName: ""
		};
	}

	handleChange( e ) {
		this.setState( { userName: e.target.value } );
	}

	login() {
		if ( !this.state.userName ) {
			return alert( "Enter a name you turkey!" );
		}

		this.props.dispatch( setUser( this.state.userName ) );
	}

	componentWillReceiveProps( props ) {
		console.log( props );
	}

	render() {
		return (
			<div>
				{ this.props.user.loggedIn
					?
						<h1>Welcome to your Comic App { this.props.user.userName }</h1>
					:
						<div>
							<input
								onChange={ this.handleChange.bind( this ) }
								type="text"
								value={ this.state.userName }
							/>
							<button onClick={ this.login.bind( this ) }>Login</button>
						</div>
				}

				<Link to="comics">Show Comics</Link>

				{ this.props.children }

			</div>
		);
	}
}

// export default connect( state => ( { user: state.user } ) )( App );
// export default connect( state => {
// 	console.log( state );
// 	return { user: state.user };
// } )( App );

// which piece of state were interested in. Returns a function that expects a component
const prepConnect = connect( state => ( { user: state.user } ) );

// Actually connect the component, and generate something like /*<App user={ store.user } />*/
const connectedComponent = prepConnect( App );

export default connectedComponent;
