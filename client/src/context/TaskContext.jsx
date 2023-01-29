import { createContext, useContext, useState } from 'react'
import {
  getTasksRequest,
  getTaskRequest,
  createTaskRequest,
  updateTaskRequest,
  deleteTaskRequest,
  toggleTaskRequest,
} from '../api/tasks.api.js'

const TaskContext = createContext()

export const useTask = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTask must be used within a TaskContextProvider')
  }
  return context
}

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {
    const { data } = await getTasksRequest()
    setTasks(data)
  }

  const getTask = async (id) => {
    try {
      const { data } = await getTaskRequest(id)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const createTask = async (task) => {
    try {
      await createTaskRequest(task)
    } catch (error) {
      console.log(error)
    }
  }

  const updateTask = async (id, updateTask) => {
    try {
      await updateTaskRequest(id, updateTask)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id)
      setTasks(tasks.filter((task) => task.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id)
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: task.done === 0 ? 1 : 0 } : task
        )
      )
      await toggleTaskRequest(id, taskFound.done === 0 ? true : false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        getTask,
        createTask,
        updateTask,
        deleteTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
