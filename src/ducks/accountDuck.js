const BUY_COMIC = "account/BUY_COMIC";

const initialState = {
	  balance: 1000
	, ownedComics: []
};

export default function reducer( state = initialState, action ) {
	switch ( action.type ) {
		case BUY_COMIC:
			return {
				  balance: state.balance - action.comic.price
				, ownedComics: [ ...state.ownedComics, action.comic ]
			};
		default:
			return state;
	}
}

export function buyComic( comic ) {
	return { type: BUY_COMIC, comic }
}
