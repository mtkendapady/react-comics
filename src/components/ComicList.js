import React from "react";
import { Link } from "react-router";

import { getComics } from "../services/comicService";

export default class ComicList extends React.Component {
	constructor() {
		super();

		this.state = {
			comics: []
		};
	}

	componentWillMount() {
		this.setState( { comics: getComics() } );
	}

	render() {
		const comics = this.state.comics.map( ( comic, index ) => (
			<li key={ index }>
				<Link to={ `/comics/${ comic._id }` }><img className="comic-pic" src={ comic.img } />{ comic.company }</Link>
			</li>
		) );

		return (
			<ul>
				{ comics }
			</ul>
		);
	}
}
