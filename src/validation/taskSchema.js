import { z } from 'zod'

const taskSchema = z.object({
  title: z.string().min(3, "Tytuł musi mieć co najmniej 3 znaki"),
  desc: z.string().min(1, "Opis nie może być pusty")
})

export default taskSchema