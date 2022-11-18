import { Debito } from './Debito'
import { MercadoPago } from './MercadoPago'

interface ICheckout {
  pagoConMercadoPago: (numeroCuenta: string) => void
  pagoConDebito: (numeroTarjeta: string, dni: string) => void
}

export class Checkout implements ICheckout {
  pagoConMercadoPago (numeroCuenta: string) {
    const servicio = new MercadoPago(numeroCuenta)
    servicio.ejecutar()
    servicio.notificar()
  }

  pagoConDebito (numeroTarjeta: string, dni: string) {
    const servicio = new Debito(numeroTarjeta, dni)
    servicio.ejecutar()
  }
}
