import Menu from '../components/menu/index.jsx';
import Capa from '../components/capa/index.jsx';
import Sobre from '../components/sobre/index.jsx';

function Home(){
    return(
        <div>
            <Capa />
            <Menu />
            <Sobre />
        </div>
    );
}

export default Home;