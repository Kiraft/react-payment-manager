import { useState } from 'react'
import { deudores as db2 } from '../data/db'
import { DeudorItem } from '../types';

export default function useDashboard() {

    //Hooks
    const [deudores, setDeudores] = useState<DeudorItem []>(db2)
    const [modal, setModal] = useState(true);

    // Logic Functions
    const showModalDeudores = () => modal === false

    return {
        deudores,
        modal,
        setModal,
        setDeudores,
        showModalDeudores
    }    
}