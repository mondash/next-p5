import { Inter } from "@next/font/google";

import styles from "./footer.module.css";

const inter = Inter({ subsets: ["latin"] });

export const links = {
  docs: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  learn:
    "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  templates:
    "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  deploy:
    "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
};

type CardProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};

function Card({ href, title, children }: CardProps) {
  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        {title} <span>-&gt;</span>
      </h2>
      <p className={inter.className}>{children}</p>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className={styles.grid}>
      <Card title="Docs" href={links.docs}>
        Find in-depth information about Next.js features and&nbsp;API.
      </Card>
      <Card title="Learn" href={links.learn}>
        Learn about Next.js in an interactive course with&nbsp;quizzes!
      </Card>
      <Card title="Templates" href={links.templates}>
        Discover and deploy boilerplate example Next.js&nbsp;projects.
      </Card>
      <Card title="Deploy" href={links.deploy}>
        Instantly deploy your Next.js site to a public URL with Vercel.
      </Card>
    </footer>
  );
}
