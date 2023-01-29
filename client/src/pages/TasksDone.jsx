import { useEffect } from 'react'
import { useTask } from '../context/TaskContext'
import TaskCard from '../components/TaskCard'

function TasksDone() {
  const { tasks, loadTasks } = useTask()
  let doneTask = 0

  useEffect(() => {
    loadTasks()
  }, [])

  const loadDoneTasks = () => {
    tasks.map((task) => {
      if (task.done === 1) {
        doneTask++
      }
    })
    return doneTask
  }

  const renderTasks = () => {
    return tasks.map((task) => {
      if (task.done === 1) {
        return <TaskCard task={task} key={task.id} />
      }
    })
  }

  return (
    <div>
      <div className="md:flex md:justify-between items-center">
        <h1 className="md:text-4xl md:text-left text-3xl text-center font-extrabold tracking-normal">
          Tasks Done
        </h1>
        <p className="md:text-right text-center text-lg text-gray-400">{`You have ${loadDoneTasks()} done tasks`}</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 grid-cols-1 gap-4 mt-10">
        {renderTasks()}
      </div>
    </div>
  )
}

export default TasksDone
