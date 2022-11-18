import { MetodoPago } from './Checkout'

export class Debito implements MetodoPago {
  constructor (private tarjeta: string, private dni: string) { }

  pagar () {
    console.log(`Transaccion generada con mercado pago. Se debitara de la tarjeta ${this.tarjeta}`)
  }
}
