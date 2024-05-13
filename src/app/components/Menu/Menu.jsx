'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Menu.module.css'
import { useRouter } from 'next/router'


export default function Menu() {

  // const router = useRouter()
  // const pathname = usePathname()

  const menuItems = [
    { href: '/', label: 'FASHION COLLECTIONS' },
    { href: '/injured', label: 'INJURED' },
    { href: '/mothers', label: 'MOTHERS' },
    { href: '/somnambulance', label: 'SOMNAMBULANCE OF THE CITY' },
    { href: '/nightmares', label: 'NIGHTMARES OF LONELY LIGHTOUSE KEEPER' },
    { href: '/', label: 'COLLABORATIONS' },
    { href: '/XXX24', label: 'XXX24' },
    { href: '/aj', label: 'AJ POWER PROJECT RECYCLING' },
    { href: '/xxx22', label: 'XXX22' },
    { href: '/volga', label: 'VOLGA VINTAGE' },
    { href: '/', label: 'PUBLICITY' },
    { href: '/lofficiel', label: `L'OFFICIEL BALTIC` },
    { href: '/santa', label: 'SANTA MAGAZINE' },
    { href: '/lilit', label: 'LILIT LOOK' },
    { href: '/', label: 'CREATIVE DIRECTION' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.fixedContainer}>
        <Link href={'/'} className={styles.header}>Loreta <br /> Asermane</Link>
        {menuItems.map((menuItem, index) => (
          <Link href={menuItem.href} key={index} className={styles.categories}>
            <p className={styles.categories}>{menuItem.label}</p>
          </Link>
        ))}
      </div>
    </div >
  )
}
