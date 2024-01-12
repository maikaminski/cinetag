import Banner from "componentes/Banner";
import Cards from "componentes/Cards";
import Titulo from "componentes/Titulo";
import styles from "./Inicio.module.css";
import videos from 'json/db.json';


function Inicio() {
    
    return (
        <>
           
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Cards {...video} key={video.id} />
                })}
            </section>
            
        </>
    )
}

export default Inicio;