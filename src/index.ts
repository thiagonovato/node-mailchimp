import 'dotenv/config'
import express, { Request, Response } from 'express'
import MC from './mailchimp'

const app = express()
const PORT = 3000

const mailchimp = new MC()
const { ping, getList } = mailchimp

app.get("/", async (req: Request, res: Response) => {
  const result = await ping()
  res.json(result)
})

app.get("/list", async (req: Request, res: Response) => {
  const result = await getList()
  res.json(result)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

