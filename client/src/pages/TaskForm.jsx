import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useTask } from '../context/TaskContext'

function TaskForm() {
  const { createTask, getTask, updateTask } = useTask()
  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const { title, description } = await getTask(params.id)
        setTask({
          title,
          description,
        })
      }
    }
    loadTask()
  }, [])

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          params.id
            ? await updateTask(params.id, values)
            : await createTask(values)
          setTask({
            title: '',
            description: '',
          })
          actions.resetForm()
          navigate('/')
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            className="bg-gray-700/60 rounded-md max-w-sm py-8 px-6 mx-auto shadow-lg shadow-gray-700/30"
            onSubmit={handleSubmit}
          >
            <h1 className="md:text-4xl text-3xl text-center font-extrabold tracking-normal">
              {params.id ? 'Edit task' : 'Create task'}
            </h1>
            <label className="block text-lg font-semibold mt-6">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="My title"
              className="text-base rounded-lg mt-3 w-full p-2.5 bg-gray-600 placeholder-gray-400"
              onChange={handleChange}
              value={values.title}
            />

            <label className="block text-xl font-semibold mt-5">
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              placeholder="My description..."
              className="text-base rounded-lg mt-3 w-full p-2.5 bg-gray-600 placeholder-gray-400"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button className="block bg-indigo-600 p-2 mt-6 w-full rounded-lg hover:bg-indigo-600/70" type="submit" disabled={isSubmitting}>
              {params.id ? 'Update' : 'Create'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskForm
