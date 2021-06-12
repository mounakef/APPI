import React from 'react'
import { useSelector } from "react-redux";

import Task from './Task'

const TaskList = () => {
    const toDos = useSelector(state => state.toDo)
    return (
        <div>
        
        { toDos.map(el=>
            <Task element={el}  key={el.id}/>
            ) }
        
        </div>
    )
}

export default TaskList
