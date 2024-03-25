import { useState } from "react"
import { PlusCircle } from "@phosphor-icons/react"

import styles from "./NewTaskInput.module.css"

export function NewTaskInput() {
  const [newTaskText, setNewTaskText] = useState("")

  return (
    <div className={styles.newTaskInput}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />

      <button>
        <strong>Criar</strong>
        <PlusCircle size={20} />
      </button>
    </div>
  )
}
