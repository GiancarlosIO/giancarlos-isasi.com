import Building from '@/icons/Building';
import styles from './NotFound.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TheDecoderJS</h1>
      <p className={styles.subtitle}>Website under construction</p>
      <Building className={styles.building} />
      <a
        className={styles.link}
        href="https://codepen.io/bungeedesign/pen/yMqZyv"
        rel="noreferrer"
        target="_blank"
      >
        codepen: https://codepen.io/bungeedesign/pen/yMqZyv
      </a>
    </div>
  );
}
