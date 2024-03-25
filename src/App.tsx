import { Header } from './components/Header'
import { NewTaskInput } from './components/NewTaskInput'

import './global.css'

import styles from "./App.module.css"

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />

      <NewTaskInput />
      
    </div>
  )
}

export default App
