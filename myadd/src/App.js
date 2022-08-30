import { Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Отзывы from './componentes/Отзывы'
import Чтоэто from './componentes/Чтоэто'
import Контакты from './componentes/Контакты'
function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes >
         <Route path='отзывы'element={<Отзывы />} />
         <Route path='чтоэто'element={<Чтоэто />} />
         <Route path='контакты'element={<Контакты/>} />
     </Routes>
    </div>
  );
}

export default App;
