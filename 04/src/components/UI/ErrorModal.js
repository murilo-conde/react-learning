import {memo} from "react"

import Card from "./Card"
import Button from "./Button"

import styles from './ErrorModal.module.css'

const ErrorModal = ({title, messages, visible, onClose}) => {
  return (
    visible ? (
      <>
        <div className={styles.backdrop}/>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          <div className={styles.content}>
            {messages.length === 0 && <p>No error messages found.</p>}
            {messages.map(msg => <p key={msg.key}>{msg.message}<br/></p>)}
          </div>
          <footer className={styles.actions}>
            <Button onClick={onClose}>Close</Button>
          </footer>
        </Card>
      </>) : <></>

  )
}

export default memo(ErrorModal)