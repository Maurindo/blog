import styles from './contato.module.css'
import Foto2 from '../../imagens/foto1.png'

export default function Contato(){
    return(
        <div className={styles.corpo}>
            <h1> Contato </h1>

            <p>
                Quisque massa mi, venenatis in gravida in, porta rhoncus dui. Sed tempus pellentesque nunc, commodo iaculis tortor. 
                Nam ut leo enim. Nam sed blandit ex. Nullam congue justo justo. Nunc at consequat nunc. Vestibulum quis faucibus urna. 
                Nunc id bibendum nisl. 
            </p>

            <img src={Foto2} alt="foto de contato usado na campanha" />

            <br/><span className={styles.negrito}>e-mail: </span><span>contato@annabella.com.br</span>
            <br/><span className={styles.negrito}>telefon: </span><span>(11) 3333-3333</span>
            <div className={styles.final}>
                Todos os direitos reservados
            </div>
        </div>
    );
}