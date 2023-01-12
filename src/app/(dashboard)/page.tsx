import Image from "next/image";
import styles from "./dashboard.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <iframe src="/sketch/foo" width={600} height={600} />
      <iframe src="/sketch/bar" width={600} height={600} />
    </main>
  );
}
