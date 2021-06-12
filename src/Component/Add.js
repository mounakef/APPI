import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from'../Redux/action'

const Add = () => {
    const [taskNew, setTaskNew] = useState({id:Math.random(),
description:"",
isDone:false})
const dispatch = useDispatch();   

     
    return (
        <div>
         <input type="text"  onChange={e=>setTaskNew({id:Math.random(), description :e.target.value,isDone:false})}/>
         <button onClick={()=>{dispatch(addTask(taskNew))}}>AddTask</button>   
        </div>
    )
    }


export default Add
