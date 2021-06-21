const { createStore, $CombinedState } = require('redux')

// state는 단일 객체로 만든다.
// vuex의 state이다.
const state = { str: '', arr: [], obj: null }

// reducer는 함수형태로 만든다
// reducer는 실제로 값을 저장한다 (저장된 값은 자동으로 state에 반영된다)
// vuex의 mutations이다.
const reducers = (prev = state, action) => {
	switch(action.type) {
		case 'ACT_STR':
			return {
				...prev, str: action.payload
			}
		case 'ACT_ARR':

		case 'ACT_OBJ':

	}
}


// action creator란?
// reducer는 객체를 리턴하므로 받은 값(payload)을 변경하기가 힘들다. 
// 그러므로 값을 변경하는 역할을 하는 곳이 action creator 다.
const actStr = (payload) => {
	// payload값을 가공한다.
	return {
		type: 'ACT_STR',
		payload
	}
}


// store는 redux의 핵심모듈이고 reducer, state, subscribe를 관장한다.
// store는 등록만 해주면 끝난다.
// vuex의 new Vuex.Store({ state, getters, mutations, actions }) 이다
const store = createStore(reducers)


// subscribe는 state가 변경되면 자동으로 실행된다.
// subscribe에서는 state가 바뀌면 view를 갱신하는 역할을 한다.
// 단 react 프로젝트에서는 쓰지 않는다(react가 알아서 화면을 바꿔준다)
store.subscribe(() => {
	// 여기는 view의 갱신을 코딩한다. 
	// store.getStore() 이 vuex의 getters 이다
	console.log('======== subscribe ========') 
	console.log(store.getState()) 
})


/************************* view에서 일어나는 동작들 *****************************/
store.dispatch(actStr('A'))
store.dispatch(actStr('B'))
