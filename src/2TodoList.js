import { useState, useEffect } from "react";


function App(){

    /*
    * use state and Effect
    */
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);

    /*
    * User Function
    */
    const onChange = (e) => {
      setTodo(e.target.value);
    }

    const onSubmit = (e) => {
      e.preventDefault();
      if(toDo === "") return;
      
      setTodos((currentArray) => {
        return [toDo, ...currentArray];//toDo.push
      })
      
      setTodo("");
    };
    console.log(toDos);


    /*
    * HTML
    */
    return(
        <div>
          <h1>My TODOs ({toDos.length})</h1>
          <form onSubmit={onSubmit}>
              <input
              type="text"
              value={toDo}
              placeholder="wriete your to do"
              onChange={onChange}
              >
              </input>
              <button>Add To do</button>
          </form>
        <hr/>
        {toDos.map((item, index) => 
          <li key={index}>{item}</li>)}
        </div>
        
    )
}

export default App;