const { createStore } = require('redux')

/************ state *************/
/* user: { id: null, name: null },
comments: [{id: 1, uid: 1, comment: '아버지를 아버지라'}, {}, {}] */
const state = {
	user: null,
	comments: []
}

/************ reducers *************/
// USER_LOGIN 			payload = { id: 1, name: '홍길동' }
// USER_LOGOUT 			payload(x)
// COMMENTS_ADD			payload = { id: 1, uid: 1, comment: '아버지를 아버지라...' }
// COMMENTS_REMOVE	payload(id)

const reducers = (prevState = state, action) => {
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
				comments: prevState.comments.filter( v => v.id !== action.payload )
			}
	}
}

/************ action Creator *************/
const actUserLogin = (payload) => {
	return { type: 'USER_LOGIN', payload }
}

const actUserLogout = () => {
	return { type: 'USER_LOGOUT' }
}

const actCommentsAdd = (payload) => {
	const comments = store.getState().comments
	payload.id = comments.length ? comments[comments.length - 1].id + 1 : 1
	return { type: 'COMMENTS_ADD', payload }
}

const actCommentsRemove = (payload) => {
	return { type: 'COMMENTS_REMOVE', payload }
}

/************ createStore *************/
const store = createStore(reducers)


/************ subscribe *************/
store.subscribe(() => { console.log(store.getState()) })


/*******************************/
/************ View *************/
store.dispatch(actUserLogin({ id: 2, name: '춘향이' }))
store.dispatch(actCommentsAdd({ uid: 2, comment: '변사또 네 이놈...' }))
store.dispatch(actCommentsAdd({ uid: 2, comment: '이몽룡 언제와...' }))
store.dispatch(actCommentsRemove(2))
store.dispatch(actUserLogout())
