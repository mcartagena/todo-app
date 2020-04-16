const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const todos = (state = [], action) => {
    // write Reducers to handle the actions.
    switch (action.type) {
      case ADD_TODO:
          return [...state,
          {
              text: action.text,
              completed: false,
              id: state.length,
          },
          ];
      case TOGGLE_TODO:
          return state.map((todo, index) => {
              if (todo.id === action.id) {
                  return Object.assign({}, todo, {
                      completed: !todo.completed,
                  });
              }
              return todo;
          });

      default:
          return state;
  }

  }
  
  export default todos