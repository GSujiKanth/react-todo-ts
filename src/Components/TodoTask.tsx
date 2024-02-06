import React from 'react'
import { ITask } from '../Interfaces'

type Props = {
    task: ITask
    deleteTask(taskIdToDelete: number): void 
}

const TodoTask = ({ task, deleteTask}: Props) => {
  return (
    <div className="task">
        <div className="content">
            <span>{task.taskName}</span>
        </div>  
        <button onClick={() => {deleteTask(task.id);}}>Delete</button>    
    </div>
  );
}

export default TodoTask