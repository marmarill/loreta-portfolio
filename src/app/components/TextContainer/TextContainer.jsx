import React, { Children } from 'react'
import styles from './TextContainer.module.css'

const TextContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default TextContainer