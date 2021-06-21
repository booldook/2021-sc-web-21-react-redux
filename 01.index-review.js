const { createStore } = require('redux')

const state = { str: '' }

const reducers = (prevState, action) => {
	switch(action.type) {
		case 'ACT_STR':
			return {
				...prevState, str: action.payload
			}
	}
}

const store = createStore(reducers, state)
store.subscribe( () => { console.log( store.getState() ) } )
const actStr = (payload) => {
	return {
		type: 'ACT_STR',
		payload: payload + '['+ new Date().getTime() +']'
	}
}

store.dispatch(actStr('A'))

