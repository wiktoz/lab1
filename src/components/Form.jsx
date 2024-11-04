import { useState } from 'react'
import AddButton from './AddButton'
import StarWrapper from './StarWrapper'
import { useTasks } from '../context/TaskContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import taskSchema from '../validation/taskSchema'

const formatDate = (date) => {
    return date.toISOString().slice(0, 16)
}

const Form = () => {
    const now = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(now.getDate() + 1)

    const minDate = formatDate(now)
    const defaultDate = formatDate(tomorrow)

    const [rating, setRating] = useState(0)
    const [date, setDate] = useState(defaultDate)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: zodResolver(taskSchema)})

    const { addTask } = useTasks()

    const submit = (data) => {
        addTask(data.title, data.desc, date, rating)
        reset()
    }

    return(
        <div>
            <div className="header">
                Dodaj nowe zadanie
            </div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="my-05">
                        <input 
                            placeholder="tytuł"
                            className={errors.title ? "input-error" : ""}
                            {...register("title")}
                        />
                        {errors.title && <div className="error-message">{errors.title.message}</div>}
                    </div>
                    <div className="my-05">
                        <textarea 
                            placeholder="opis"
                            className={errors.desc ? "input-error" : ""}
                            {...register("desc")}
                        />
                        {errors.desc && <div className="error-message">{errors.desc.message}</div>}
                    </div>
                    <div className="my-05">
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
                        <button type='submit'>
                            <AddButton/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form