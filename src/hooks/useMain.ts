import { useState } from "react";
import { DeudorItem } from "../types";

export default function useMain() {

    //Hooks
    const [deudor, setDeudor] = useState<DeudorItem | null>(null)
    const [modalDeuda, setModalDeuda] = useState(true);

    // Logic Functions
    const MainIsEmpty = () => deudor === null;
    const showModalDeudas = () => modalDeuda === false

    return {
        deudor,
        setDeudor,
        modalDeuda,
        setModalDeuda,
        MainIsEmpty,
        showModalDeudas
    }    
}