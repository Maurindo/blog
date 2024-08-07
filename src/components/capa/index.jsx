import styles from './capa.module.css';
import Foto from '../../imagens/capa.png';

function Capa(){
    return(
        <div className={styles.capa}>
            <img src={Foto} alt='foto da capa' />

        </div>

    );
}

export default Capa;