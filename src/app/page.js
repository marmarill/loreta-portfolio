'use client'

import styles from "./page.module.css";

import ImageContainer from "./components/ImageContainer/ImageContainer";
import Layout from "./components/Layout/Layout";

export default function Home() {
  return (
    <main className={styles.main}>
      <Layout>
        <ImageContainer src={"/main.jpg"} />
        <ImageContainer src={"/main.jpg"} />
        <ImageContainer src={"/main.jpg"} />
        <ImageContainer src={"/main.jpg"} />
        <ImageContainer src={"/main.jpg"} />
        <ImageContainer src={"/main.jpg"} />
      </Layout>
    </main>
  );
}
