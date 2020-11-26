import React, { useState } from "react"
import ToDoLists from "./ToDoLists";
 const App = ()=>{

  const[inputList , setInputList] = useState("");
  const [Items , setItems] = useState([]);

  const itemsEvent =(event)=>{
    setInputList(event.target.value)
  }

  const handleClick = () => {
    setItems( (oldItems) =>{
      return [...oldItems , inputList];
    });
    setInputList('');

  }
   return(
     <>
     <div className="main_div">
       <div className="center_div">
         <br/>
         <h1>ToDo List</h1>
         <br/>
         <input type="text" placeholder="Add a items" value={inputList} onChange={itemsEvent}/>
         <button onClick = {handleClick}>+</button>
         <ol>
           {/* <li> {inputList} </li> */}
           {Items.map( (itemsval)=> {
             <ToDoLists/>
           })}
         </ol>
       </div>
     </div>
     </>
   )
 }

export default App;
