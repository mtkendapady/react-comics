Will be building a TODO app using React, React Router, and Redux

### Resources
Project: https://github.com/DevMountain/react-emporium
https://github.com/zacanger/react-bits from Zac Anger
## Redux http://redux.js.org/

## Fork & Clone the Tutorial

```
git clone https://github.com/McKmillions/react-todo
cd react-todo
npm install
npm start
```

## What the finished react project will look like
![alt tag](https://raw.githubusercontent.com/McKmillions/react-rogue1/master/dist/img/react-rogue1.png)

**Dev-Dependencies** ( `npm i --save-dev` )

`npm i webpack webpack-dev-server babel-core babel-preset-es2015 babel-preset-react babel-loader style-loader css-loader --save-dev`

* `webpack`
    * The module bundler we will be using as a build tool for this project.
    * If you haven't already, you will also want to install this globally ( `npm i webpack -g` )
* `webpack-dev-server`
    * A tool built for Webpack to allow live page reloads whenever a change is made.
    * If you haven't already, you will also want to install this globally ( `npm i webpack-dev-server -g` )
* `babel-core`
    * The core of Babel's parser
* `babel-preset-es2015`
    * A Babel preset allowing us to compile ES2015 to ES5
* `babel-plugin-transform-es2015-destructuring`
    * Compile ES2015 destructuring to ES5
* `babel-plugin-transform-object-rest-spread`
    * This plugin allows Babel to transform rest properties for object destructuring assignment and spread properties for object literals. ```js let n = { x, y, ...z }; console.log(n); // { x: 1, y: 2, a: 3, b: 4 }```
* `babel-preset-react`
    * A Babel preset allowing us to parse JSX
* `babel-loader`
    * Babel's Webpack plugin
* `style-loader`
* `css-loader`
    * These allow Webpack to handle our CSS as well as our JS

**Standard Dependencies** ( `npm i --save` )

* `react`
    * The core React library
* `react-dom`
    * The entry point of working with the DOM in React
* `react-router`
    * Keeps your UI in sync with the URL. Powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.
* `redux` https://github.com/reactjs/redux
    * Redux is a predictable state container for JavaScript apps.
* `react-redux` https://github.com/reactjs/react-redux
    * Official React bindings for Redux.

`npm i react react-dom react-router redux react-redux --save`

**Checkpoint:** You should now be able to run `webpack-dev-server -d` and navigate a browser window to [http://localhost:8080](http://localhost:8080).

This is the best example to get a deeper understanding of how the state updates work together with components in Redux. It shows how reducers can delegate handling actions to other reducers, and how you can use React Redux to generate container components from your presentational components.


## Angular VS React
Angular 1	React
View	HTML template + Controller	JSX Component
State	Services/Factories	Redux
Rest/API calls	Factory/Service? Controller?	actions/reducers
middleware
Dependencies	Bower/CDN	NPM Import/Require
Dep Injection	Script Tag	Included in bundle
Require & Bundling	Browserify with Grunt/Gulp	Webpack

 | Angular | React
------------ | ------------- | -------------
view | HTML template + Controller | JSX Component
State | Services/Factories | Redux
Rest/API calls | Factory/Service? Controller? | actions/reducers
middleware
Dependencies | Bower/CDN | NPM Import/Require
Dep Injection | Script Tag | Included in bundle
Require & Bundling | Browserify with Grunt/Gulp | Webpack


Redux is a predictable state container

* It enforces functional programming and ensures predictability of the app behavior
* It allows for isomorphic app, where most of the logic is shared between the client and the server code
* It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
* Inforces immutability of state

Reasons to use Redux https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.ojxnkskge

> Redux offers a tradeoff. It asks you to:
* Describe application state as plain objects and arrays.
* Describe changes in the system as plain objects.
* Describe the logic for handling changes as pure functions.
None of these limitations are required to build an app, with or without React. In fact these are pretty strong constraints, and you should think carefully before adopting them even in parts of your app.
Do you have good reasons for doing so?
These limitations are appealing to me because they help build apps that:
* Persist state to a local storage and then boot up from it, out of the box.
* Pre-fill state on the server, send it to the client in HTML, and boot up from it, out of the box.
* Serialize user actions and attach them, together with a state snapshot, to automated bug reports, so that the product developers can replay them to reproduce the errors.
* Pass action objects over the network to implement collaborative environments without dramatic changes to how the code is written.
* Maintain an undo history or implement optimistic mutations without dramatic changes to how the code is written.
* Travel between the state history in development, and re-evaluate the current state from the action history when the code changes, a la TDD.
* Provide full inspection and control capabilities to the development tooling so that product developers can build custom tools for their apps.
* Provide alternative UIs while reusing most of the business logic.
If you’re working on an extensible terminal, a JavaScript debugger, or some kinds of webapps, it might be worth giving it a try, or at least considering some of its ideas (they are not new, by the way!)
Redux library itself is only a set of helpers to “mount” reducers to a single global store object. You can use as little, or as much of Redux, as you like.

## The Gist

* The whole state of your app is stored in an object tree inside a single store.

* The only way to change the state tree is to emit an action, an object describing what happened.

* To specify how the actions transform the state tree, you write pure reducers.

That's it!

### Example

```js
import { createStore } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
```

Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called actions. Then you write a special function called a reducer to decide how every action transforms the entire application's state.

Managing this ever-changing state is hard. If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state. When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features.

## Three Principles

Redux can be described in three fundamental principles:
1. Single source of truth
2. State is read-only
3. Changes are made with pure functions

## Single source of truth

### The state of your whole application is stored in an object tree within a single store.

A single state tree makes it easier to debug an application; it also enables you to persist your app's state in development, for a faster development cycle. Some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly become trivial to implement, if all of your state is stored in a single tree.

```js
console.log(store.getState())

/* Prints
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/
```

This ensures that neither the views nor the network callbacks will ever write directly to the state.

Instead, they express an intent to transform the state.

Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

```js
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
```

## Changes are made with pure functions

### To specify how the state tree is transformed by actions, you write pure reducers.

Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state. You can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.

```js
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

import { combineReducers, createStore } from 'redux'
let reducer = combineReducers({ visibilityFilter, todos })
let store = createStore(reducer)
```

1. The state tree defines the UI and the action callbacks through props
2. User actions, such as clicks, are sent to an action creator that normalizes them
3. The resulting redux actions are passed to a reducer that implements the actual app logic
4. The reducer updates the state tree and dispatches it to a store that, well, stores it
5. The UI is updated accordingly to the new state tree in the store

![alt tag](https://raw.githubusercontent.com/McKmillions/react-todo/master/img/ui_workflow.png)

## Ducks Method
https://github.com/erikras/ducks-modular-redux
http://www.robinwieruch.de/the-soundcloud-client-in-react-redux-ducks/

## Actions

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using `store.dispatch()`.

Here's an example action which represents adding a new todo item:

```js
const ADD_TODO = 'ADD_TODO'

{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

```js
import { ADD_TODO, REMOVE_TODO } from '../actionTypes'
```

Other than type, the structure of an action object is really up to you.

We'll add one more action type to describe a user ticking off a todo as completed. We refer to a particular todo by index because we store them in an array. In a real app, it is wiser to generate a unique ID every time something new is created.

```js
{
  type: TOGGLE_TODO,
  index: 5
}
```

It's a good idea to pass as little data in each action as possible. For example, it's better to pass index than the whole todo object.

Finally, we'll add one more action type for changing the currently visible todos.

```js
{
  type: SET_VISIBILITY_FILTER,
  filter: SHOW_COMPLETED
}
```

Your finished code should look something like this:

## Ducks Method
https://github.com/erikras/ducks-modular-redux
