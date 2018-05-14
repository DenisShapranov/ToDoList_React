
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }

      ]

    case 'DELETE_TODO':
      return  state.filter(todo =>
        todo.id !== action.id
      )
      
    case 'SORT_TODO':
      console.log('dsafsd');
      return state.sort((a, b) => {
        if (a.text === b.text) { return 0; }
          return (a.text > b.text) ? 1 : -1;
        });


    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}
export default todos
