import { useTasks } from "../context/TaskContext"
import Task from "./Task"

const TasksWrapper = () => {
    const { tasks } = useTasks()

    return(
        <div className="task-wrapper grid w-1-3">
            {
                tasks && tasks.length > 0 ?
                tasks.map(task => {
                    return(
                        <Task task={task} key={task.id}/>
                    )
                }) :

                <div>
                    Brak zadań na dzisiaj
                </div>
            }
        </div>
    )
}

export default TasksWrapper