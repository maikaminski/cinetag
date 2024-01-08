import Banner from "componentes/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "componentes/Titulo";
import { useFavoritoContext } from "contextos/Favoritos";
import Cards from "componentes/Cards";

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
        <Banner imagem="favoritos" />
        <Titulo><h1>Meus Favoritos</h1></Titulo>
        <section className={styles.container}>
            {favorito.map((fav) => {
                return <Cards {...fav} key={fav.id} />
            })}
        </section>
        </>
    )
}

export default Favoritos;