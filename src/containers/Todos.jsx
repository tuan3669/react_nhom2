import { useReducer } from 'react';

export default function Todos() {
  const [todos, dispatch] = useReducer(
    reducer,
    initialTodos
  );

  const handleComplete = (todo) => {
    dispatch({
      type: 'COMPLETE',
      id: todo.id,
    });
  };
  const handleAdd = () => {
    dispatch({
      type: 'ADD',
      id: ++nextId,
    });
  };
  return (
    <>
      <button onClick={handleAdd}>
        Add
      </button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type='checkbox'
            checked={todo.complete}
            onChange={() =>
              handleComplete(todo)
            }
          />{' '}
          {todo.title}
        </div>
      ))}
      {console.log(todos)}
    </>
  );
}

let nextId = 2;
const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      });
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          title: 'New ' + action.id,
          complete: false,
        },
      ];
    default:
      return state;
  }
};
