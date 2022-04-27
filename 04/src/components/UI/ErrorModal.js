import {createPortal} from "react-dom"

import {memo} from "react"

import Card from "./Card"
import Button from "./Button"

import styles from './ErrorModal.module.css'

const ErrorModalBackdrop = ({onClick}) => {
  return <div onClick={onClick} className={styles.backdrop}/>
}

const ErrorModalOverlay = ({title, messages, onClose, overlayRef}) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div ref={overlayRef} className={styles.content}>
        {messages.length === 0 && <p>No error messages found.</p>}
        {messages.map(msg => <p key={msg.key}>{msg.message}<br/></p>)}
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Close</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = ({title, messages, visible, onClose, modalRef}) => {
  return (
    visible ? (
      <>
        {createPortal(<ErrorModalBackdrop onClick={onClose}/>, document.getElementById('backdrop-root'))}
        {createPortal(<ErrorModalOverlay overlayRef={modalRef} title={title} messages={messages}
                                         onClose={onClose}/>, document.getElementById('overlay-root'))}
      </>) : <></>
  )
}

export default memo(ErrorModal)