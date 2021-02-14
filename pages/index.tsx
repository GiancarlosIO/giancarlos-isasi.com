import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Building from '../src/components/Building'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mr. N</h1>
      <p className={styles.subtitle}>Website under construction</p>
      <Building className={styles.building} />
      <a className={styles.link} href="https://codepen.io/bungeedesign/pen/yMqZyv" target="_blank">codepen: https://codepen.io/bungeedesign/pen/yMqZyv</a>
    </div>
  )
}
