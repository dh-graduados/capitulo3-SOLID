import { MetodoPago } from './Checkout'

export class MercadoPago implements MetodoPago {
  constructor (private account: string) { }

  private ejecutar () {
    console.log(`Transaccion generada con mercado pago. Se debitara de la cuenta ${this.account}`)
  }

  private notificar () {
    console.log('Notificacion realizada al cliente con exito.')
  }

  pagar () {
    this.ejecutar()
    this.notificar()
  }
}
