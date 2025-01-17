import Image from "next/image"
import { aboutData } from "../data/data"
import styles from "./page.module.css"
import Buttons from "../ui/buttons"

export default function About() {
  const { title, description, info, picture } = aboutData
  return (
    <main className={styles.main}>
      <h2>{title}</h2>
      <div className={styles.aboutMe}>
        <p className={styles.intro}>{description}</p>
        <div className={styles.portrait}>
          <Image
            alt="Sarah Laurent"
            src={picture}
            fill
            sizes="(max-width: 500px) 100vw"
          />
        </div>
      </div>
      <h3>Me Contacter</h3>
      <p>{info}</p>
      <p>Pour prendre RDV,</p>
      <div className={styles.rdv}>
        <div className={styles.block}>
          <p>Sur Planity</p>
          <Buttons
            href={
              "https://www.planity.com/escale-bien-etre-massage-73000-chambery"
            }
            text={"Prendre rdv"}
          />
        </div>
        <p>ou</p>
        <div className={styles.block}>
          <p> par téléphone : </p>
          <a href="tel:+33628770421">06.28.77.04.21</a>
        </div>
        <p>Vous pouvez également me contacter par mail.</p>
      </div>
    </main>
  )
}
