import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import CardDeudor from './components/Dashboard/CardDeudor'
import MainEmpty from './components/Main/MainEmpty'
import ModalCreateDeudor from './components/Dashboard/ModalCreateDeudor'
import ModalCreateDeuda from './components/Main/ModalCreateDeuda'
import useMain from './hooks/useMain'
import useDashboard from './hooks/useDashboard'
import TransactionCard from './components/Transaction/TransactionCard'
import useTransactions from './hooks/useTransactions'


function App() {

  const {
    deudor,
    setDeudor,
    setModalDeuda,
    MainIsEmpty,
    showModalDeudas
  } = useMain()

  const {
    deudores,
    setModal,
    showModalDeudores
  } = useDashboard()

  const {
    transactions,
    setTransactions
  } = useTransactions()

  return (
      <div className='h-screen flex flex-col'>
        <Header setModal={setModal} />

        <main className='flex'>

          {/* Container izquierdo */}
          <div className='bg-violet-950 flex-1 h-[calc(100vh-60px)] overflow-auto' id="journal-scroll">
            <p className='max-w-sm mx-auto my-8 text-center text-4xl'>Deudores</p>
            {deudores.map(item => (<CardDeudor item={item} setDeudor={setDeudor} setTransactions={setTransactions} />))}
          </div>

          {/* Container main */}
          <div className='bg-violet-900 flex-2 flex flex-col shadow h-[calc(100vh-60px)]' >

            {MainIsEmpty() ? (<MainEmpty />) : (<Main deudor={deudor!} setModalDeuda={setModalDeuda} />)}

          </div>

          {/* Container derecho */}
          <div className='bg-violet-950  flex-1 h-[calc(100vh-60px)] overflow-auto'>
            <p className='max-w-sm mx-auto my-8 text-center text-4xl'>Movimientos</p>
            {transactions.map((item) => (
              <TransactionCard item={item} />
            ))}

          </div>

        </main>
        {showModalDeudores() ? (<ModalCreateDeudor setModal={setModal} />) : (<></>)}
        {showModalDeudas() ? (<ModalCreateDeuda setModalDeuda={setModalDeuda} />) : (<></>)}
      </div>
  )
}

export default App
