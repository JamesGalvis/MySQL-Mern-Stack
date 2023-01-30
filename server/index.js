import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { PORT } from './config.js'
import tasksRoutes from './routes/task.routes.js'

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

// routes
app.use('/api', tasksRoutes)

// handle routes not found
app.use((req, res, next) => {
    res.json({
        message: 'This route was not found'
    })
})

// hanlde internal errors from controllers functions
app.use((err, req, res, next) => {
    return res.status(500).json({
        message: err.message
    })
})

// server execution
app.listen(PORT, console.log(`server running on port ${PORT}`))