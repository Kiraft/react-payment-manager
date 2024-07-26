import { DeudorItem } from "../../types"

type MainHeaderProps = {
    setModalDeuda: React.Dispatch<React.SetStateAction<boolean>>,
    deudor: DeudorItem
}

export default function MainHeader({setModalDeuda, deudor} : MainHeaderProps) {
    return (
        <div className='bg-gray-900 h-24 flex justify-between items-center px-12'>
            <div className='flex items-center'>
                <img src="/UserImgs/me.jpg" alt="" className='size-16 rounded-full' />
                <span className='text-2xl mx-5 text'>{deudor.nombre}</span>
            </div>
            <div>
                <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-violet- text-lg font-bold text-white border mx-6" onClick={() => setModalDeuda(false)}>
                    Agregar cuenta
                </button>

                <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-violet- text-lg font-bold text-white border" >
                    Abonar pago
                </button>
            </div>
        </div>
    )
}