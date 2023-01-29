import React from 'react'
import { useTask } from '../context/TaskContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonToggle({ id, taskDone, icon }) {
  const { toggleTaskDone } = useTask()

  const handleDone = async () => {
    await toggleTaskDone(id)
  }

  return (
    <button
    className={
      taskDone === 0
        ? 'text-red-400 sm:text-base text-sm font-semibold bg-slate-600 h-9 sm:px-3 px-2 rounded-3xl border border-red-400/50 hover:bg-slate-500 transition-colors'
        : 'text-green-500 sm:text-base text-sm font-semibold bg-slate-600 h-9 sm:px-3 px-2 rounded-3xl border border-green-500/50 hover:bg-slate-500 transition-colors'
    }
      onClick={() => handleDone()}
    >
      {taskDone === 0 ? 'Pending' : 'Done'} <FontAwesomeIcon icon={icon} />
    </button>
  )
}

export default ButtonToggle
