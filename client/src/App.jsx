import './App.css'
import { Route, Routes } from 'react-router-dom'
import TasksPage from './pages/TasksPage.jsx'
import TasksDone from './pages/TasksDone'
import TaskForm from './pages/TaskForm.jsx'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import { TaskContextProvider } from './context/TaskContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTrash,
  faPen,
  faCheck,
  faClock,
} from '@fortawesome/free-solid-svg-icons'

function App() {
  library.add(faTrash, faPen, faCheck, faClock)

  return (
    <div className="h-screen overflow-auto tracking-tight text-zinc-300 bg-gray-900">
      <Navbar />
      <div className="container mx-auto my-12 w-10/12">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/tasks/done" element={<TasksDone />} />
            <Route path="/task/new" element={<TaskForm />} />
            <Route path="/task/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  )
}

export default App
