import styles from './NotFound.module.css';
import Building from '@/icons/Building';

import { SVGCss } from './404.styles';

export default function Home() {
  return (
    <div className={styles.container}>
      <SVGCss />
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
