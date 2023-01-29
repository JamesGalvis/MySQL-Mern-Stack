import { useEffect } from 'react'
import { useTask } from '../context/TaskContext'
import TaskCard from '../components/TaskCard'

function TasksPage() {
  const { tasks, loadTasks } = useTask()

  useEffect(() => {
    loadTasks()
  }, [])

  const renderTasks = () => {
    if (tasks.length === 0)
      return (
        <h2 className="text-3xl font-medium text-zinc-400">No tasks yet</h2>
      )
    return tasks.map((task) => <TaskCard task={task} key={task.id} />)
  }

  return (
    <div>
      <div className='md:flex md:justify-between md:items-center'>
        <h1 className="md:text-4xl md:text-left text-3xl text-center font-extrabold tracking-normal">
          Tasks List
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 grid-cols-1 gap-4 mt-10">
        {renderTasks()}
      </div>
    </div>
  )
}

export default TasksPage
