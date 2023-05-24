//import logo from './platzi.webp';

import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch' ;
import {TodoList} from './TodoList' ;
import {TodoItem} from './TodoItem' ;
import {CreateTodoButton} from './CreateTodoButton' ;
import './App.css';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'saltar', completed: false },
  { text: 'estudiar', completed: false },
  { text: 'leer', completed: true },
  { text: 'correr', completed: false }
]
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState();
    useState('');

  const comletedTodos = todos.filter(todo => !!todo.completed).length ;
  const totalTodos  = todos.length;

  return (
    <div className="App">
      <TodoCounter  completed={completedTodos} 
      total={ totalTodos}/>

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>

        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 

          />
        ))}


      </TodoList>

      <CreateTodoButton /> 
    </div>
  );
}





export default App;
