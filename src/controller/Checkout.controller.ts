import { Request, Response } from 'express'
import { Checkout } from '../model/Checkout'

interface IBody {
    cuenta?: string
    tarjeta?: string
    dni?: string
}

export const checkoutController = {
  run: (req: Request, res: Response) => {
    const tipo = req.params.tipo

    if (!tipo) return res.status(400).json({ error: 'Se requiere un metodo de pago valido.' })

    const body = req.body as IBody

    switch (tipo) {
      case 'MERCADO_PAGO': {
        if (!body.cuenta) return res.status(400).json({ error: 'Se requiere un numero de cuenta valido.' })

        const checkout = new Checkout()

        checkout.pagoConMercadoPago(body.cuenta)
        break
      }

      case 'DEBITO': {
        if (!body.tarjeta || !body.dni) return res.status(400).json({ error: 'Se requiere una tarjeta o dni valido.' })

        const checkout = new Checkout()

        checkout.pagoConDebito(body.tarjeta, body.dni)
        break
      }

      default:
        return res.status(400).json({ error: 'El metodo de pago no es soportado.' })
    }
    res.json({ mensaje: 'Transaccion realizada correctamente.' })
  }
}
