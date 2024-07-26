import { TransactionsItem } from "../../types"

type TransactionCardProps = {
    item: TransactionsItem
}

export default function TransactionCard({item} : TransactionCardProps) {
    return (
        <div className="max-w-sm mx-auto my-10">
            <div className="bg-white shadow-lg rounded-lg px-6 py-3 space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="p-2 border-lime-600 border-2 rounded-lg">
                        {/* <!-- Icon from Heroicons (https://heroicons.com/) --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-lime-600 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </div>

                    <div className="flex justify-between items-center">
                        <div className="text-gray-600 text-sm pr-[150px]">Abono a cuenta</div>
                        <div className="text-gray-900 text-2xl font-semibold">
                            <p>${item.monto}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}