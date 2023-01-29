import { useNavigate } from 'react-router-dom'
import { useTask } from '../context/TaskContext'
import ButtonToggle from '../components/ButtonToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TaskCard({ task }) {
  const { deleteTask } = useTask()
  const navigate = useNavigate()

  return (
    <div className="grid bg-slate-700/75 shadow-lg rounded-lg p-4 max-w-xl">
      <div className="flex items-center justify-between pb-1">
        <h3 className="sm:text-xl text-lg font-bold ">{task.title}</h3>
        {task.done === 0 ? (
          <ButtonToggle id={task.id} taskDone={task.done} icon={'clock'} />
        ) : (
          <ButtonToggle id={task.id} taskDone={task.done} icon={'check'} />
        )}
      </div>
      <div>
        <p className="sm:text-lg text-base text-gray-300">{task.description}</p>
        <span className="sm:text-base text-sm text-gray-300/60">{task.createAt}</span>
      </div>
      <div className="flex gap-x-1 pt-4 ">
        <button
          className="h-8 w-9 py-1 px-2 rounded-lg bg-red-700 hover:bg-red-800 transition-colors"
          onClick={() => deleteTask(task.id)}
        >
          <FontAwesomeIcon icon="trash" />
        </button>
        <button
          className="h-8 w-9 py-1 px-2 rounded-lg bg-slate-500 hover:bg-slate-600 transition-colors"
          onClick={() => navigate(`/task/edit/${task.id}`)}
        >
          <FontAwesomeIcon icon="pen" />
        </button>
      </div>
    </div>
  )
}

export default TaskCard
