const { createStore } = require('redux')

// state는 단일 객체로 만든다.
// vuex의 state이다.
const state = { str: '', arr: [], obj: null }

// reducer는 함수형태로 만든다
// reducer는 실제로 값을 저장한다 (저장된 값은 자동으로 state에 반영된다)
// vuex의 mutations이다.
const reducers = (prev, action) => {
	switch(action.type) {
		case 'ACT_STR':
			return {
				...prev, str: action.payload
			}
		case 'ACT_ARR':

		case 'ACT_OBJ':

	}
}


// store는 redux의 핵심모듈이고 reducer, state, subscribe를 관장한다.
// store는 등록만 해주면 끝난다.
// vuex의 new Vuex.Store({ state, getters, mutations, actions }) 이다
const store = createStore(reducers, state)

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
store.dispatch({ type: 'ACT_STR', payload: 'A' });
store.dispatch({ type: 'ACT_STR', payload: 'B' });

