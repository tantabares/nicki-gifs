import RandomGif from "../components/random-gif";
import styles from '../styles/Home.module.css'

export default function Nicki() {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
          This is a Nicki Minaj gif
        </h1>

        <RandomGif />


    </main>
  )
}