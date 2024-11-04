import { createContext, useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import data from "../data.json"

const TasksContext = createContext()

export function useTasks(){
    return useContext(TasksContext)
}

const sortArray = (arr) => {
    return arr.sort((a, b) => {
        const now = new Date();

        const aFuture = a.status === 'todo' && new Date(a.time) > now;
        const bFuture = b.status === 'todo' && new Date(b.time) > now;

        if (aFuture && !bFuture) {
            return -1
        }
        if (!aFuture && bFuture) {
            return 1
        }
        
        if (a.status === 'todo' && b.status === 'todo') {
            return new Date(a.time) - new Date(b.time)
        }
        
        if (a.status === 'done' && b.status === 'done') {
            return 0
        }

        if (a.status === 'todo') {
            return -1
        }
        if (b.status === 'todo') {
            return 1
        }

        return 0
    })
}

const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState(() => sortArray(data))

    const addTask = (title, desc, time, rating) => {
        const newTask = {
            id: uuidv4(),
            title,
            desc,
            time,
            status: "todo",
            rating
        }

        setTasks(sortArray([...tasks, newTask]))
    }

    const removeTask = (id) => {
        if(!tasks) return

        const newTasks = tasks.filter(task => task.id !== id)

        setTasks(sortArray(newTasks))
    }

    const setRating = (id, rating) => {
        if(!tasks) return

        const newTasks = tasks.map(task => {
            if(task.id === id)
                return {...task, rating: rating}

            return task
        })

        setTasks(newTasks)
    }

    const changeStatus = (id, status) => {
        if(!tasks) return

        const newTasks = tasks.map(task => {
            if(task.id === id)
                return {...task, status: status}

            return task
        })

        setTasks(sortArray(newTasks))
    }

    return(
        <TasksContext.Provider value={{ tasks, addTask, removeTask, setRating, changeStatus }}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksProvider
