'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Menu.module.css'

export default function Menu() {

  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.fixedContainer}>
        <h1 className={styles.header}>Loreta<br />Asermane</h1>
        <Link href="/first" className={styles.categories}>FASHION COLLECTIONS</Link>
        <Link href="/injured" className={`${styles.sub} ${styles.categories}`}>INJURED</Link>
        <Link href="/mothers" className={`${styles.sub} ${styles.categories}`}>MOTHERS</Link>
        <Link href="/somnambulance" className={`${styles.sub} ${styles.categories}`}>SOMNAMBULANCE OF THE CITY</Link>
        <Link href="/nightmares" className={`${styles.sub} ${styles.categories}`}>NIGHTMARES OF LONELY LIGHTOUSE KEEPER</Link>
        <Link href="/first" className={styles.categories}>COLLABORATIONS</Link>
        <Link href="/first" className={`${styles.sub} ${styles.categories}`}>XXX24</Link>
        <Link href="/first" className={`${styles.sub} ${styles.categories}`}>AJ POWER PROJECT RECYCLING</Link>
        <Link href="/first" className={`${styles.sub} ${styles.categories}`}>XXX22</Link>
        <Link href="/first" className={`${styles.sub} ${styles.categories}`}>VOLGA VINTAGE</Link>
        <Link href="/first" className={styles.categories}>PUBLICITY</Link>
        <Link href="/first" className={`${styles.sub} ${styles.categories}`}>L'OFFICIEL BALTIC</Link>
        <Link href="/first" className={`${styles.sub} ${styles.categories}`}>SANTA MAGAZINE</Link>
        <Link href="/first" className={`${styles.sub} ${styles.categories}`}>LILIT LOOK</Link>
        <Link href="/first" className={styles.categories}>CREATIVE DIRECTION</Link>
      </div>
    </div >
  )
}
