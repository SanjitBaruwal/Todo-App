
import { createContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export const TaskContext = createContext();

 export const TaskProvider = ({children}) =>{
    const [tasks, setTasks] = useLocalStorage("Store Todo in localStorage", []);
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [previousFocusEl, setPreviousFocusEl] = useState(null);
  
    const addTask = (task)=>{
      setTasks(prevState => [...prevState, task])
    }
  
    const deleteTask = (id) =>{
      setTasks(prevState => prevState.filter((task)=>(task.id !== id)))
    }
  
    // toggle the task to enable deleting.
    const toggleTask =(id) =>{
      setTasks(prevState => prevState.map((task)=>(
        task.id ===id 
          ? {...task, checked: !task.checked} 
          : task
      )))
    }
  
    const updateTask = (task)=>{
      setTasks(prevState => prevState.map((t)=>(
        t.id === task.id 
          ? {...t, name: task.name} 
          : t
      )))
  
      closeEditMode();
    }
  
    const closeEditMode = () =>{
      setIsEditing(false);
      previousFocusEl.focus()
    }
  
    const enterEditMode = (task)=>{
      setEditedTask(task);
      setIsEditing(true);
      setPreviousFocusEl(document.activeElement);
    }
  
    return (
        <TaskContext.Provider value={{tasks, editedTask, isEditing, addTask, deleteTask, toggleTask, updateTask, enterEditMode, closeEditMode}}>
            {children}
        </TaskContext.Provider>
    )
}

