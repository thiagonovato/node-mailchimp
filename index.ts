import 'dotenv/config'
import express from 'express'
import { callPing } from './mailchimp.js'

const app = express()
const PORT = 3000

app.get("/", async (req, res) => {
  const result = await callPing()
  res.json(result)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

