import { pool } from '../database.js'

export const getTasks = async (req, res, next) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM tasks ORDER BY createAt DESC'
    )
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export const getTask = async (req, res, next) => {
  try {
    const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [
      req.params.id,
    ])

    if (result.length === 0)
      return res.status(404).json({
        message: 'That task does not exit',
      })

    res.json(result[0])
  } catch (error) {
    next(error)
  }
}

export const createTask = async (req, res, next) => {
  const { title, description } = req.body
  try {
    const [result] = await pool.query(
      'INSERT INTO tasks(title, description) VALUES (?, ?)',
      [title, description]
    )

    const [rows] = await pool.query('SELECT createAt FROM tasks WHERE id = ?', [
      result.insertId,
    ])

    const { createAt } = rows[0]

    res.json({
      id: result.insertId,
      title,
      description,
      createAt,
    })
  } catch (error) {
    next(error)
  }
}

export const updateTask = async (req, res, next) => {
  const { id } = req.params
  const newData = req.body
  try {
    const [result] = await pool.query(
      'UPDATE tasks SET ? WHERE id = ?',
      [newData, id]
    )

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: 'That tasks does not exist',
      })

    const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id])

    res.json(rows[0])
  } catch (error) {
    next(error)
  }
}

export const deleteTask = async (req, res, next) => {
  try {
    const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [
      req.params.id,
    ])

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: 'That task does not exist',
      })

    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}
