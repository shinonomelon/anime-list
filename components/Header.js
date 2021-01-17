import Link from 'next/link';
import styles from './Header.module.css'

const Header =  () => (
  <div className={styles.wrapper}>
    <div className={styles.fixed}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.logo}>
            <Link href="/"><a>アニメリスト</a></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
