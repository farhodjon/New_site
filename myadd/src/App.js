import { Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Отзывы from './componentes/Отзывы'
import Чтоэто from './componentes/Чтоэто'
import Контакты from './componentes/Контакты'
import Registiratsiya from './componentes/Registiratsiya';
function App() {
  return (
    <div className="App">
     <Registiratsiya />
     
     {/* <Navbar /> */}
     <Routes >
         <Route path='/'element={<Отзывы />} />
         <Route path='чтоэто'element={<Чтоэто />} />
         <Route path='контакты'element={<Контакты/>} />
     </Routes>

    </div>
  );
}

export default App;
