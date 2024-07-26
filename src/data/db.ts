import type { DeudorItem } from '../types'

export const deudores : DeudorItem[] = [
    {
        id: 1,
        nombre: "Papa",
        tipo: "Mensual",
        deudas: [
            {
                id: 1,
                titulo: "Izzi",
                total: 250,
                restante: 250,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            },
            {
                id: 2,
                titulo: "Amazon - Ventilador",
                total: 62,
                restante: 62,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            },
            {
                id: 3,
                titulo: "Telefono Xiaomi",
                total: 169,
                restante: 169,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            },
            {
                id: 4,
                titulo: "Tableta Wacon",
                total: 113,
                restante: 113,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            },



        ],
        abonos: [
            {
                id: 1,
                monto: 200
            },
            {
                id: 2,
                monto: 300
            }
        ]
    },
    {
        id: 2,
        nombre: "Mama",
        tipo: "Mensual",
        deudas: [
            {
                id: 1,
                titulo: "Izzi",
                total: 200,
                restante: 200,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            },
            {
                id: 2,
                titulo: "Telefono",
                total: 333,
                restante: 333,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            },
            {
                id: 3,
                titulo: "Laptop",
                total: 200,
                restante: 200,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            }
        ],
        abonos: [
            {
                id: 1,
                monto: 10
            },
            {
                id: 2,
                monto: 333
            }
        ]
    },
    {
        id: 3,
        nombre: "Papa",
        tipo: "Anual",
        deudas: [
            {
                id: 1,
                titulo: "Deuda anterior 1",
                total: 407,
                restante: 407,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            },
            {
                id: 2,
                titulo: "Deuda anterior 2",
                total: 332,
                restante: 332,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            }
        ],
        abonos: [
            {
                id: 1,
                monto: 2211
            },
            {
                id: 2,
                monto: 1000
            }
        ]
    },
    {
        id: 3,
        nombre: "Kaled",
        tipo: "Anual",
        deudas: [
            {
                id: 1,
                titulo: "PRESTAMO",
                total: 50,
                restante: 50,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            },
            {
                id: 2,
                titulo: "COLEGIATURA",
                total: 2000,
                restante: 2000,
                fechaDePago: {
                    mes: "APR",
                    dia: 19
                }
            }
        ],
        abonos: [
            {
                id: 1,
                monto: 110
            },
            {
                id: 2,
                monto: 500
            },
            {
                id: 3,
                monto: 10
            }
        ]
    },

]