import DoneButton from "./DoneButton"
import StarWrapper from "./StarWrapper"
import OutdatedButton from "./OutdatedButton"
import ToDoButton from "./ToDoButton"
import { TrashIcon } from "@heroicons/react/24/outline"
import { useTasks } from "../context/TaskContext"
import { useState } from "react"

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: 'UTC' 
}

const Task = ({task}) => {
    const { removeTask, changeStatus } = useTasks()

    const [rating, setRating] = useState(task.rating)

    return(
        <div className={"task-container flex flex-col justify-between"}>
            <div className={(task.status === "done" || Date.now() > new Date(task.time)) ? "disabled" : ""}>
                <div className="flex flex-row justify-between">
                    <div className="task-title">
                        {
                            (task.status === "done" || Date.now() > new Date(task.time)) ?
                            <s>{task.title}</s> : task.title
                        }
                    </div>
                    <div>
                        <StarWrapper id={task.id} rating={rating} ratingSetter={setRating}/>
                    </div>
                </div>
                
                <div className="task-desc">
                    {task.desc}
                </div>
                <div className="task-date">
                    {new Date(task.time).toLocaleString('pl-PL', options)}
                </div>
            </div>
            <div className="flex flex-row justify-between align-center mt-2">
                { 
                    (task.status === "done" || Date.now() > new Date(task.time)) ?
                    
                    <div className="remove-btn" onClick={() => removeTask(task.id)}>
                        <TrashIcon width={20} height={20} /> 
                    </div>
                    :
                    <div></div>
                }    
                {
                    task.status === "done" ? 
                        <DoneButton/> :

                    Date.now() > new Date(task.time) ?
                        <OutdatedButton/> : 
                        <div onClick={() => changeStatus(task.id, "done")}>
                            <ToDoButton/>
                        </div>     
                }
                
            </div>
        </div>
    )
}

export default Task