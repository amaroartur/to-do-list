import { Header } from './components/Header'
import './global.css'
import { PlusCircle } from '@phosphor-icons/react'

import styles from "./App.module.css"

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.newTaskInput}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa'
        />

        <button>
          <strong>Criar</strong>
          <PlusCircle size={20}/>
        </button>
      </div>
    </div>
  )
}

export default App
