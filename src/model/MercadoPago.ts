interface IMercadoPago {
  ejecutar: () => void
  notificar: () => void
}

export class MercadoPago implements IMercadoPago {
  constructor (private account: string) { }

  ejecutar () {
    console.log(`Transaccion generada con mercado pago. Se debitara de la cuenta ${this.account}`)
  }

  notificar () {
    console.log('Notificacion realizada al cliente con exito.')
  }
}
