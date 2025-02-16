import { motion } from "framer-motion"
import styles from "./Heart.module.css"

interface HeartProps {
  isOpen: boolean
  onClick: () => void
}

export default function Heart({ isOpen, onClick }: HeartProps) {
  return (
    <motion.div className={styles.heart} onClick={onClick}>
      <motion.div className={styles.leftSide} animate={{ rotate: isOpen ? -20 : 0, x: isOpen ? -20 : 0 }} />
      <motion.div className={styles.rightSide} animate={{ rotate: isOpen ? 20 : 0, x: isOpen ? 20 : 0 }} />
    </motion.div>
  )
}

