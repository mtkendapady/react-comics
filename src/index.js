import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";

import store from "./store";

import App from "./components/App";
import Comic from "./components/Comic";
import ComicList from "./components/ComicList";

import "./styles.css"

document.addEventListener( "DOMContentLoaded", () => {
	const reactNode = document.getElementById( "react-node" );

	ReactDOM.render(
		<Provider store={ store }>
			<Router history={ browserHistory }>
				<Route component={ App } path="/">
					<Route component={ ComicList } path="comics" />
					<Route component={ Comic } path="comics/:id" />
				</Route>
			</Router>
		</Provider>
		, reactNode );
} );
