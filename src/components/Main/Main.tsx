import { useState } from 'react'
import CardDetalle from './CardDetalle'
import MainHeader from './MainHeader'
import { DeudorItem } from '../../types'

type MainProps = {
    deudor: DeudorItem,
    setModalDeuda:  React.Dispatch<React.SetStateAction<boolean>>
}
export default function Main({deudor, setModalDeuda} : MainProps) {

    const [deudas, setDeudas] = useState(deudor.deudas)

    return (
        <>
            <MainHeader setModalDeuda={setModalDeuda} deudor={deudor} />
            <div className=' flex-1 mx-8 mt-8 overflow-auto ' id="journal-scroll" >
                {deudas.map((deuda) => (
                    <CardDetalle deuda={deuda} />
                ))}
            </div>
        </>
    )
}