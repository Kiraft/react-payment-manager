export type DeudaItem = {
    id: number,
    titulo: string,
    total: number,
    restante: number,
    fechaDePago: Fecha
}

export type TransactionsItem = {
    id: number,
    monto: number
}

export type Fecha = {
    mes: string,
    dia: number
}

export type DeudorItem = {
    id: number,
    nombre: string,
    tipo: string,
    deudas: DeudaItem[],
    abonos: TransactionsItem[]
}