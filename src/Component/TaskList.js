import React, {useState} from 'react'
import { useSelector } from "react-redux";
import Task from './Task'
import '../App.css'
const TaskList = () => {
    const toDos = useSelector((state) => state.toDo)
    const [safwen, setSafwen] = useState("all")
   

    const modifList =()=>{
     if(safwen==="all"){
       
       return toDos
     }
else if(safwen==="done"){
    return toDos.filter (el=>el.isDone==true)
         }
         else if(safwen==="undone"){
          return  toDos.filter (el=>el.isDone==false)        
         }
        }
let List = modifList()

    
const handleAll =()=>{ 
  
    return setSafwen("all")
    
 }
const handleDone =()=>{ 
   return  setSafwen("done")
}
const handleUndone=()=>{ 
    return setSafwen("undone")
}

    return (
        <div>
        <button onClick= {handleAll}> All</button>
        <button onClick ={handleDone}> done </button>
        <button onClick ={handleUndone}> undone</button>
        <div>
        { List.map(el=>{
        return <Task element={el}  key={el.id}/>}) }
        </div>
        </div>
    )
}

export default TaskList
