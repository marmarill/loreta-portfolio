import React from 'react'
import Image from 'next/image'
import styles from './ImageContainer.module.css'

const ImageContainer = ({ src }) => {
  return (
    <div>
      <Image className={styles.image}
        src={src}
        width={732}
        height={509}
        layout="responsive"
        alt="Project Image"
      />
    </div>
  )
}
export default ImageContainer

