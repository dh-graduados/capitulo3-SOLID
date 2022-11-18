import { NextFunction, Request, Response } from 'express'

export const MiddlewareValidarTipo = (req: Request, res: Response, next: NextFunction) => {
  const tipo = req.params.tipo

  if (!tipo) return res.status(400).json({ error: 'Se requiere un metodo de pago valido.' })

  next()
}
