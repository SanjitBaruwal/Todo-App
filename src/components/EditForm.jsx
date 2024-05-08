import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const EditForm = ({editedTask,updateTask, closeEditMode}) => {

    const  updatedRef = useRef(editedTask.name); 
    // const [updatedTaskName,setUpdatedTaskName] = useState(editedTask.name);

    useEffect(() =>{
        const closeModalIfEscaped = (e ) =>
        {
            e.key === 'Escape' && closeEditMode();
        }
        window.addEventListener("keydown",closeModalIfEscaped)

        return ()=>{
            window.removeEventListener("keydown",closeModalIfEscaped)
        }
    },[closeEditMode])

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        updateTask({...editedTask, name:updatedRef.current.value})
    }
  return (
    <div
     role="dialog" 
     aria-labelledby="editTask"
     onClick={(e)=>{e.target === e.currentTarget && closeEditMode()}}

    >
        <form
            className="todo"
            onSubmit={handleFormSubmit}
        >
            <div className="wrapper">
                <input
                 type="text"
                 id='editTask'
                 className="input"
                 defaultValue={editedTask.name}
                //  onChange={(e)=>setUpdatedTaskName(e.target.value)}
                ref={updatedRef}
                 required
                 autoFocus
                 maxLength={1000}
                 placeholder="Update Task"
                />
                <label htmlFor="editTask" className="label">Update Task</label>
        
            </div>
            <button
                className="btn"
                aria-label={`Confirm edited task to now read ${updatedRef.current.value}`}
                type="submit"
            >
                <CheckIcon strokeWidth={2} height={24} width={24}/>
            </button>
        </form>
    </div>
  )
}

export default EditForm