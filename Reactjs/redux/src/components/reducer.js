const initialCount = { count: 0 };

function reducer(state = initialCount, action) {
	if (action.type === 'INCREMENT') {
		return { count: state.count + 1 };
	} else if (action.type === 'DECREMENT') {
		return { count: state.count - 1 };
	}
	return state;
}
export default reducer;
