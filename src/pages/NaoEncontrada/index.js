import styles from "./NaoEncontrada.module.css";

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>A página que você procura não foi encontrada!</p>
        </section>
    )
}

export default NaoEncontrada;