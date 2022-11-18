import express from 'express'
import { checkoutRouter } from './routes/Checkout.routes'

const PORT = 3000

const app = express()

app.use(express.json())

app.use('/', checkoutRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
