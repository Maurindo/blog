import styles from './campanha.module.css'
import Foto1 from '../../imagens/foto1.png'
import Foto2 from '../../imagens/foto2.png'
import Foto3 from '../../imagens/foto3.png'

export default function CampanhasPublicitarias(){
    return(
        <div className={styles.corpo}>
            <h1>Campanhas Publicitárias</h1>

            <p>
                Quisque massa mi, venenatis in gravida in, porta rhoncus dui. Sed tempus pellentesque nunc, commodo iaculis tortor. 
                Nam ut leo enim. Nam sed blandit ex. Nullam congue justo justo. Nunc at consequat nunc. Vestibulum quis faucibus urna. 
                Nunc id bibendum nisl. 
            </p>

            <img src={Foto1} alt="fot campanha" />


            <p>
                Quisque massa mi, venenatis in gravida in, porta rhoncus dui. Sed tempus pellentesque nunc, commodo iaculis tortor. 
                Nam ut leo enim. Nam sed blandit ex. Nullam congue justo justo. Nunc at consequat nunc. Vestibulum quis faucibus urna. 
                Nunc id bibendum nisl. 
            </p>

            <img src={Foto2} alt="segunda foto da campanha" />

            <p>
                Quisque massa mi, venenatis in gravida in, porta rhoncus dui. Sed tempus pellentesque nunc, commodo iaculis tortor. 
                Nam ut leo enim. Nam sed blandit ex. Nullam congue justo justo. Nunc at consequat nunc. Vestibulum quis faucibus urna. 
                Nunc id bibendum nisl. 
            </p>

            <img src={Foto3} alt="terceira foto da campanha" />


            <p>
                Quisque massa mi, venenatis in gravida in, porta rhoncus dui. Sed tempus pellentesque nunc, commodo iaculis tortor. 
                Nam ut leo enim. Nam sed blandit ex. Nullam congue justo justo. Nunc at consequat nunc. Vestibulum quis faucibus urna. 
                Nunc id bibendum nisl. 
            </p>


            <div className={styles.final}>
                Todos os direitos reservados
            </div>
        </div>

    );
}