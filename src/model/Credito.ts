import { MetodoPago } from './Checkout'

export class Credito implements MetodoPago {
  pagar () {
    // API
    console.log('Transaccion generada con pago credito.')
  }
}
