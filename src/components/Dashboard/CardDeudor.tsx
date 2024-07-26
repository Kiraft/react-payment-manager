import type {DeudaItem, DeudorItem, TransactionsItem} from '../../types'

type CardDeudorProps = {
    item: DeudorItem,
    setDeudor: React.Dispatch<React.SetStateAction<DeudorItem | null>>,
    setTransactions: React.Dispatch<React.SetStateAction<TransactionsItem[]>>
}
export default function CardDeudor({ item, setDeudor, setTransactions } : CardDeudorProps) {


    const totalDeuda = item.deudas.reduce(
        (accumulator: number, currentValue: DeudaItem ) => accumulator + currentValue.restante,
        0,
    );

    return (
        <>
            <div className="max-w-sm mx-auto my-10">
                <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="p-2 bg-purple-200 rounded-full">
                            {/* <!-- Icon from Heroicons (https://heroicons.com/) --> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 15v4a2 2 0 002 2h3v-4" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 15h16" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-gray-600 text-sm">{item.nombre}</div>
                            <div className="text-gray-900 text-2xl font-semibold">
                                ${totalDeuda}
                                <span className="text-green-500 text-sm font-medium flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                    </svg>
                                    122
                                </span>
                            </div>
                        </div>
                    </div>
                    <button className="w-full text-purple-600 bg-purple-100 hover:bg-purple-200 text-sm py-2 px-4 rounded-md transition duration-300 ease-in-out" onClick={() => { setDeudor(item); setTransactions(item.abonos) }}>
                        Ver deudas
                    </button>
                </div>
            </div>
        </>
    )
}