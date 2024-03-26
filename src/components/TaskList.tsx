import styles from "./TaskList.module.css"

import clipboard from "../assets/clipboard.svg"

export function TaskList() {
  return (
    <div className={styles.container}>
      <header>
        <strong>
          Tarefas criadas<span>0</span>
        </strong>

        <strong>
          Tarefas concluídas<span>0</span>
        </strong>
      </header>

      <main>
        <div className={styles.listContainer}>
          <img src={clipboard} alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </main>
    </div>
  )
}
