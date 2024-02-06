import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import {ITask} from "./Interfaces";
import TodoTask from "./Components/TodoTask";


const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } 
  };

  const addTask = (): void => {
    const newTask = {id:Math.floor(Math.random() * 1000000), taskName: task, edit: false, complete: false};
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const deleteTask = (taskIdToDelete: number): void => {
    setTodoList(todoList.filter((task) => {
      return task.id !== taskIdToDelete
    }))
  };

  const completeTask = (taskIdToComplete: number): void => {
    for (const task of todoList) {
      if (task.id === taskIdToComplete) {
        if (task.complete === false) {
          Object.assign(task, { complete: true })
          return setTodoList(todoList)
        } else {
          Object.assign(task, { complete: true })
          return setTodoList(todoList)
        }
      }
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input 
            type="text" 
            placeholder="Task..." 
            name = "task" 
            value = {task}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
        {/* <button onClick={}>Completed Tasks</button> */}
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
