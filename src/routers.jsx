import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from './paginas/contato.jsx';
import Home from './paginas/home.jsx';
import Biografia from './paginas/biografia.jsx';
import CampanhaPublicitaria from './paginas/campanhapublicitaria.jsx';

function AppRouters() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/biografia" element={<Biografia />}></Route>
                <Route path="/cp" element={<CampanhaPublicitaria />}></Route>
                <Route path="/contato" element={<Contato />}></Route>
            </Routes>
        </BrowserRouter>
    );
    
}

export default AppRouters;