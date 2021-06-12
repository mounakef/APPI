import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask ,editTask} from '../Redux/action'
const Task = ({element}) => {

    const  dispatch = useDispatch();
   
    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>

        <h4>{element.description}</h4> 
        <div><button onClick={()=>{dispatch(editTask(element.id,element.description))}}>Edit</button>
        <button onClick={()=>dispatch(deleteTask(element.id))}>x</button>
        <input type="checkbox" id="scales" name="scales"
       /></div>
           
           
        </div>
    )
}
 
export default Task
