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
  return (
    <div className="App">
      <TodoCounter  completed={16} total={30}/>

      <TodoSearch />

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
