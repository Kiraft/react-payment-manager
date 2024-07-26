import { DeudaItem } from "../../types"

type CardDetalleProps = {
    deuda: DeudaItem
}

export default function CardDetalle({deuda} :  CardDetalleProps) {


    return (
        <div className="flex justify-between items-center pr-12 pl-5 bg-violet-700 w-auto h-24 text-white text-2xl mb-8 rounded-md ">
            
            {/* FECHA Y TITULO */}
            <div className="flex gap-5 text-center">
                <div>
                    <p className="">{deuda.fechaDePago.mes}</p>
                    <p className="text-5xl">{deuda.fechaDePago.dia}</p>
                </div>
                <div className="flex items-center">
                    <p className="font-bold text-3xl">{deuda.titulo}</p>
                </div>
            </div>

            {/* TOTAL Y RESTANTE */}
            <div className="flex gap-5">
                <div className="text-right">
                    <p>Total</p>
                    <p className="text-3xl font-semibold">${`${deuda.total}`}</p>
                </div>
                <div className="text-left">
                    <p>Restante</p>
                    <p className="text-3xl font-semibold">${`${deuda.restante}`}</p>
                </div>
            </div>

        </div>
    )
}