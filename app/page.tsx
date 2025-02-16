"use client"

import { useState } from "react"
import styles from "./page.module.css"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
    // Retrasar la aparición de la carta para que coincida con la animación del corazón
    setTimeout(() => setShowMessage(true), 500)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {!isOpen && <p className={styles.instruction}>¡Feliz cumple! Click Aqui!</p>}
        <div className={`${styles.heart} ${isOpen ? styles.open : ""}`} onClick={handleClick} />
        <div className={`${styles.message} ${showMessage ? styles.visible : ""}`}>
          <h2 className={styles.title}>Para Eli ♥,</h2>
          <p>
            Primero que nada Feliz cumple! Segundo francia y tercero gracias por tanto, te quiero muchisimo.
            Claramente no sabia como empezar la carta, aunque ya sabes lo mucho que significas para mí y todo lo que te quiero.
            Queria hacerte esta cartita por que
            siempre haces lo posible para hacerme sentir mejor y lo valoro tanto como no te imaginas, hoy en tu dia quiero que la pases increible!.
            Ya que te lo mereces como ninguna otra persona.
          </p>
          <p>
            Poco a poco vas a ir cumpliendo tus objetivos y me siento muy orgulloso de cada pasito que das, ya es un año mas
            en el que noto tu progreso por mas chiquito que sea. Y como siempre avanzas eso me pone muy contento como tu mejor amigo.
            Lo que mas quiero es que seas feliz y verte sonreir de cualquier forma, mientras te haga feliz yo voy a estar para ayudarte ♥.
            Gracias por estar todos los dias y todas las mañanas, por cagarme a pedos y apoyarme en todo. Feliz cumpleaños corazón.
            Te quiero un monton ♥.
          </p>
          <p>
            Att: Disin.
          </p>
          <div className={styles.messageHeart} />
        </div>
      </div>
    </main>
  )
}

