import express from 'express'
import { checkoutController } from '../controller/Checkout.controller'

const checkoutRouter = express.Router()

checkoutRouter.post('/checkout/:tipo', checkoutController.run)

export { checkoutRouter }
