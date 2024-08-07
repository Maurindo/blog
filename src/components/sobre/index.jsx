import styles from './sobre.module.css';

function Sobre(){
    return(
        <div className={styles.corpo}>

            <h1>Sobre Anna Bella</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas lobortis tellus eu commodo. 
                Donec at dignissim justo. Nam viverra odio vitae placerat iaculis. 
                In ac lorem eget velit facilisis rutrum in eu nisi. Duis commodo odio sed nisi blandit, vel feugiat mi egestas. 
                Fusce et leo eu leo tristique volutpat eget eu diam. Sed lobortis imperdiet sapien, ac malesuada quam facilisis vel. 
                Nunc blandit maximus ex, eget ullamcorper augue blandit ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Phasellus dignissim lorem vel ex finibus pharetra. Sed finibus tincidunt elit sed placerat. Curabitur vitae mattis quam, 
                a auctor purus. Nulla non pharetra felis. Donec commodo risus a lacinia dictum.
            </p>

            <p>
                Quisque massa mi, venenatis in gravida in, porta rhoncus dui. Sed tempus pellentesque nunc, commodo iaculis tortor. 
                Nam ut leo enim. Nam sed blandit ex. Nullam congue justo justo. Nunc at consequat nunc. Vestibulum quis faucibus urna. 
                Nunc id bibendum nisl. Mauris tristique tellus eget diam consectetur interdum. Phasellus eu faucibus dui. 
                Pellentesque ac purus scelerisque, malesuada quam in, imperdiet sapien. Quisque auctor efficitur ligula, 
                sit amet consectetur elit egestas et. Vivamus dapibus lectus a orci ultricies, at iaculis dui lacinia. 
                Pellentesque consectetur sagittis interdum. Maecenas blandit sem nisi, eu egestas leo lacinia ut.
            </p>

            <p>
                Cras enim arcu, malesuada sit amet sem eget, lacinia sagittis magna. Proin venenatis faucibus aliquet. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Morbi tempor sem sed nisl ultricies vehicula. Nunc lorem turpis, viverra eget lorem id, auctor molestie libero. 
                Sed in lorem a magna blandit porttitor. Mauris ligula dui, facilisis in efficitur in, fringilla vitae lacus. 
                Aenean rhoncus enim et leo ultrices euismod. Integer eu maximus libero. Nunc consequat mauris ut neque pellentesque, 
                eu eleifend ex lacinia. Vivamus auctor velit at massa aliquet, at elementum odio sollicitudin. 
                Sed finibus dolor non ante condimentum, vitae bibendum risus sagittis. Fusce ac pretium arcu, et faucibus lacus. 
                Maecenas eget tortor ac erat semper pellentesque id vel libero. In vitae leo arcu.
            </p>
        
            <div className={styles.final}>
                Todos os direitos reservados
            </div>
        </div>
    );
}

export default Sobre;