import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>SpaceX App</title>
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1>SpaceX App</h1>

          <p>Welcome to the SpaceX App! Click one of the links below to get started.</p>
          <ul>
            <li>
              <Link href={`/cores/page/0`}>Cores</Link>
            </li>

            <li>
              <Link href={`/launches/page/0`}>Launches</Link>
            </li>

            <li>
              <Link href={`/launchpads/page/0`}>Launchpads</Link>
            </li>

            <li>
              <Link href={`/payloads/page/0`}>Payloads</Link>
            </li>

            <li>
              <Link href={`/rockets/page/0`}>Rockets</Link>
            </li>

            <li>
              <Link href={`/ships/page/0`}>Ships</Link>
            </li>
          </ul>
          </main>
      </div>
    </>
  );
}
