const BUY_COMIC = "account/BUY_COMIC";

const initialState = {
  ownedComics: []
};

export default function reducer( state = initialState, action ) {
  switch ( action.type ) {
    case BUY_COMIC:
      return {
        ownedComics: [ ...state.ownedComics, action.comic ]
      };
      default:
      return state;
  }
}

export function buyComic( comic ) {
  return { type: BUY_COMIC, comic };
}
