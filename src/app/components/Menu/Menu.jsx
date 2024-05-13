'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Menu.module.css'
import { useRouter } from 'next/router'


export default function Menu() {


  const currentPath = usePathname()

  const menuItems = [
    {
      label: 'FASHION COLLECTIONS', items: [
        { path: '/injured', label: 'INJURED' },
        { path: '/mothers', label: 'MOTHERS' },
        { path: '/somnambulance', label: 'SOMNAMBULANCE OF THE CITY' },
        { path: '/nightmares', label: 'NIGHTMARES OF LONELY LIGHTOUSE KEEPER' }
      ]
    },
    {
      label: 'COLLABORATIONS', items: [
        { path: '/XXX24', label: 'XXX24' },
        { path: '/aj', label: 'AJ POWER PROJECT RECYCLING' },
        { path: '/xxx22', label: 'XXX22' },
        { path: '/volga', label: 'VOLGA VINTAGE' }
      ]
    },
    {
      label: 'PUBLICITY', items: [
        { path: '/lofficiel', label: `L'OFFICIEL BALTIC` },
        { path: '/santa', label: 'SANTA MAGAZINE' },
        { path: '/lilit', label: 'LILIT LOOK' }
      ]
    },
    { label: 'CREATIVE DIRECTION', items: [] }
  ]

  const isActive = (path) => {
    return currentPath === path
  }

  return (
    <div className={styles.container}>
      <div className={styles.fixedContainer}>
        <Link href={'/'} className={styles.header}>Loreta <br /> Asermane</Link>
        {menuItems.map((category, index) => (
          <div key={index}>
            <p className={styles.category}>{category.label}</p>
            <div className={styles.sub}>
              {category.items.map((subCategory, subIndex) => (
                <Link href={subCategory.path} key={subIndex} >
                  <p className={isActive(subCategory.path) ? styles.active : styles.sub}>{subCategory.label}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}
