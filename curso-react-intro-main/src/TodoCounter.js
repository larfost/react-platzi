
import './TodoCounter.css';

function TodoCounter({completed, total}){
    return(
      <h1 /*style={{
        backgroundColor: 'lightblue'
        }}*/>
        Has completado 
        <span>{completed}</span> 
        de 
        <span>{total} </span>
        TODOS
      </h1>
    );
  }


  export { TodoCounter} ;