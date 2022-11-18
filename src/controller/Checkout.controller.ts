import { Request, Response } from 'express'
import { Checkout, MetodoPago } from '../model/Checkout'
import { Debito } from '../model/Debito'
import { MercadoPago } from '../model/MercadoPago'

interface IBody {
    cuenta?: string
    tarjeta?: string
    dni?: string
}

const MERCADO_PAGO = 'MERCADO_PAGO'
const DEBITO = 'DEBITO'

export const checkoutController = {
  run: (req: Request, res: Response) => {
    const tipo = req.params.tipo

    const checkout = new Checkout()

    const metodoPago = GeneradorMetodosPago(req, tipo)

    if (!metodoPago) return res.status(400).json({ error: 'El metodo de pago no es soportado.' })

    checkout.setMetodoPago(metodoPago)

    checkout.ejecutar()

    res.json({ mensaje: 'Transaccion realizada correctamente.' })
  }
}

const GeneradorMetodosPago = (req: Request, tipo: string) => {
  const body = req.body as IBody

  let metodoPago: MetodoPago

  switch (tipo) {
    case MERCADO_PAGO: {
      if (!body.cuenta) return undefined

      metodoPago = new MercadoPago(body.cuenta)
      break
    }

    case DEBITO: {
      if (!body.tarjeta || !body.dni) return undefined

      metodoPago = new Debito(body.tarjeta, body.dni)
      break
    }

    default:
      return undefined
  }

  return metodoPago
}
