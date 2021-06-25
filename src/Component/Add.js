import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from'../Redux/action'
import '../App.css'

const Add = () => {
    const [taskNew, setTaskNew] = useState({id:Math.random(),
description:"" ,
isDone:false})
const dispatch = useDispatch();   
const handelAdd=()=>{
    dispatch (addTask(taskNew) );
    setTaskNew({id:Math.random(),
        description:"" ,
        isDone:false});
}

     
    return (
        <div>
         <input type="text"  value={taskNew.description} onChange={e=>setTaskNew({id:Math.random(), description :e.target.value,isDone:false})}/>
         <button onClick={handelAdd} >AddTask</button>   
        </div>
    )
    }


export default Add
