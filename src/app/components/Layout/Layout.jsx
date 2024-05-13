import React from "react";
import Menu from "../Menu/Menu";
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Menu />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Layout