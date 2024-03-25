import styles from "./TaskList.module.css"

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
      <main></main>
    </div>
  )
}
