import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask,isDone } from '../Redux/action'
import EditTask from './edit';
import '../App.css'
const Task = ({element}) => {

    const  dispatch = useDispatch();
   const [checked,setChecked]=useState(false)
    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>

        <h4>{element.description}</h4> 
        <div>
            <EditTask task ={element} />
        <button onClick={()=>dispatch(deleteTask(element.id))}>x</button>
        <input type="checkbox" id="scales" name="scales"  defaultChecked={checked} onChange={()=>{setChecked(!checked);dispatch(isDone(element.id))}}
       />
       <h1>{element.isDone?"done":"not done"}</h1></div>

           
           
        </div>
    )
}
 
export default Task
