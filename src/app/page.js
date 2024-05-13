'use client'

import styles from "./page.module.css";

import ImageContainer from "./components/ImageContainer/ImageContainer";
import Layout from "./components/Layout/Layout";
import TextContainer from "./components/TextContainer/TextContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Layout>
        <ImageContainer src={"/main.jpg"} />
        <TextContainer>
          ""LOWKEY KATASTROFY FUNRIDE'' is an intriguing artistic project by multidisciplinary artist Dzelde Mierkalne. Embarking upon an exploration of the paradoxical conjunction between mortality and amusement, Mierkalne's project delves into the juncture where contrasting concepts of death and fun intersect. The convergence of aesthetics inspired by both the cemetery, a symbolic locus of remembrance and contemplation on mortality, and the iconic imagery associated with Disneyland, a realm of escapism and entertainment, forms the conceptual foundation of this venture.   The principal objective of the project lies in inciting contemplation regarding the omnipresence of death in human existence, while simultaneously examining the human inclination to actively seek amusement and exhilaration in the face of mortality's inexorable grip. Through the creation of an installation reminiscent of a grave, the artist provokes viewers to conceive of it as a metaphorical embodiment of mediated death. This juxtaposition between contrasting spheres of human experience beckons introspection upon the capricious and delicate nature of life itself. Mierkalne's endeavor effectively achieves its intended outcome by deftly integrating the aesthetic sensibilities associated with burial grounds, thus constructing an installation that seamlessly interweaves themes of mortality awareness with humanity's inherent proclivity for amusement. The project illuminates the pervasiveness of the notion of death, even amidst moments of blissful merriment and entertainment.
        </TextContainer>
        <ImageContainer src={"/main.jpg"} />
        <ImageContainer src={"/main.jpg"} />
        <ImageContainer src={"/main.jpg"} />
        <ImageContainer src={"/main.jpg"} />
        <ImageContainer src={"/main.jpg"} />
      </Layout>
    </main>
  );
}
