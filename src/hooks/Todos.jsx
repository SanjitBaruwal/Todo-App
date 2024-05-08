// import { useContext } from 'react'
import { useTaskContext } from './TaskContext'
import EditForm from '../components/EditForm';
import CustomForm from '../components/CustomForm';
import TaskList from '../components/TaskList';

const Todos = () => {
    const [tasks, editedTask, isEditing, addTask, deleteTask, toggleTask, updateTask, enterEditMode, closeEditMode] = useTaskContext();

  return (
    <div className='container'>

      <header>
        <h1>My Task List</h1>
      </header>

    {isEditing &&

      (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        /> 
      )   
      
    }
      

      
      <CustomForm addTask={addTask}/>

      {tasks && (
        <TaskList
           tasks={tasks}
           deleteTask={deleteTask}
           toggleTask= {toggleTask}
           enterEditMode={enterEditMode}
        />
        )}

    </div>
  )
}

export default Todos