interface IDebito {
  ejecutar: () => void
}

export class Debito implements IDebito {
  constructor (private tarjeta: string, private dni: string) { }

  ejecutar () {
    console.log(`Transaccion generada con mercado pago. Se debitara de la tarjeta ${this.tarjeta}`)
  }
}
