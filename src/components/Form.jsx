import { useState } from 'react'
import AddButton from './AddButton'
import StarWrapper from './StarWrapper'
import { useTasks } from '../context/TaskContext'

const formatDate = (date) => {
    return date.toISOString().slice(0, 16)
}

const Form = () => {
    const now = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(now.getDate() + 1)

    const minDate = formatDate(now)
    const defaultDate = formatDate(tomorrow)

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [rating, setRating] = useState(0)
    const [date, setDate] = useState(defaultDate)

    const { addTask } = useTasks()

    const submit = () => {
        addTask(title, desc, date, rating)
    }

    return(
        <div>
            <div className="header">
                Dodaj nowe zadanie
            </div>
            <div>
                <input 
                    placeholder="tytuł"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div>
                <textarea 
                    placeholder="opis"
                    onChange={e => setDesc(e.target.value)}
                    value={desc}
                />
            </div>
            <div>
                <input type="datetime-local" 
                    min={minDate}
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
            <div className='my-1'>
                <StarWrapper rating={rating} ratingSetter={setRating}/>
            </div>
            <div className="my-1">
                <div onClick={() => submit()}>
                    <AddButton/>
                </div>
            </div>
        </div>
    )
}

export default Form