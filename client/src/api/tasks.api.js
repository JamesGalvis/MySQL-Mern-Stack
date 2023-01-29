import axios from 'axios'

export const getTasksRequest = async () =>
  await axios.get('http://localhost:4000/api/tasks')

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/api/tasks/${id}`)

export const createTaskRequest = async (task) =>
  await axios.post('http://localhost:4000/api/tasks', task)

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/api/tasks/${id}`)

export const updateTaskRequest = async (id, updateTask) =>
  await axios.put(`http://localhost:4000/api/tasks/${id}`, updateTask)

export const toggleTaskRequest = async (id, done) => {
  await axios.put(`http://localhost:4000/api/tasks/${id}`, {
    done,
  })
}
