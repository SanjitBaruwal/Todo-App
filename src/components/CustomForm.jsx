import { useRef } from "react";
import PropTypes from "prop-types";
import { HiPlus } from "react-icons/hi";


const CustomForm = ({addTask}) => {
    // const [task,setTask] = useState("");
    
    
    const taskRef = useRef(null);


    const handleFormSubmit = (e)=>{
        e.preventDefault();
        addTask({
            name: taskRef.current.value,
            checked: false,
            id: Date.now()
        });
        taskRef.current.value = "";
    }
  return (
    <form
        className="todo"
        onSubmit={handleFormSubmit}
    >
        <div className="wrapper">

            <input
                type="text"
                id='task'
                className="input"
                //  value={task}
                ref={taskRef}
                required
                autoFocus
                maxLength={1000}
                placeholder="Enter Task"
            />
            <label htmlFor="task" className="label">Enter Task</label>
              
        </div>

        <button 
            className="btn"
            aria-label="Add Task"
            type="submit"
        >
            <HiPlus />
        </button>

    </form>
  )
}

CustomForm.propTypes = {
    addTask: PropTypes.func.isRequired,
  };

export default CustomForm