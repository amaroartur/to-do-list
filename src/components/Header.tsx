import styles from "./Header.module.css"

import todoLogo from "../assets/to-do-logo.svg"

export function Header() {
  return (
    <div className={styles.header}>
      <img src={todoLogo} alt="" />
    </div>
  )
}
