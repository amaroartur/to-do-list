import { Header } from "./components/Header"
import { NewTaskInput } from "./components/NewTaskInput"

import "./global.css"

import styles from "./App.module.css"
import { TaskList } from "./components/TaskList"

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <NewTaskInput />

      <TaskList />
    </div>
  )
}

export default App
