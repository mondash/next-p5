import Image from "next/image";

import styles from "./header.module.css";

export const vercelLink =
  "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        Get started by editing&nbsp;
        <code className={styles.code}>app/layout.tsx</code>
      </h1>
      <a href={vercelLink} target="_blank" rel="noopener noreferrer">
        By{" "}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </a>
    </header>
  );
}
