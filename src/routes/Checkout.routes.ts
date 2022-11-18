import express from 'express'
import { checkoutController } from '../controller/Checkout.controller'
import { MiddlewareValidarTipo } from '../middlewares/validacionTipo'

const checkoutRouter = express.Router()

checkoutRouter.post('/checkout/:tipo', MiddlewareValidarTipo, checkoutController.run)

export { checkoutRouter }
