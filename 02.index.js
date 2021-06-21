const { createStore } = require('redux')

/************ state *************/
/* user: { id: null, name: null },
comments: [{id: 1, uid: 1, content: '아버지를 아버지라'}, {}, {}] */
const state = {
	user: null,
	comments: []
}

/************ reducers *************/
const reducers = (prevState, action) => {
	switch(action.type) {
		case 'USER_LOGIN':
			return {
				...prevState, user: action.payload
			}
		case 'USER_LOGOUT':
			return {
				...prevState, user: null
			}
		case 'COMMENTS_ADD':
			return {
				...prevState,
				comments: [...prevState.comments, action.payload]
			}
		case 'COMMENTS_REMOVE':
			return {
				...prevState,
				comments: [...prevState.comments].filter( v => v.id !== action.payload )
			}
	}
}

/************ action Creator *************/


/************ createStore *************/
const store = createStore(reducers, state)


/************ subscribe *************/
store.subscribe(() => { console.log(store.getState()) })


/*******************************/
/************ View *************/
store.dispatch()