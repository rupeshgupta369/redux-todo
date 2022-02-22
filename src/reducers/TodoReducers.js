const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { todos: action.payload };

        case "REMOVE_TODO":
            return { todos: action.payload };
        default: return state;
    }
}
/* we can alo like the logic here in return statement but we should avoid that for simplicity and understanding 
keep the reducers as clean as possible*/

export default TodoReducer;