import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Navbar2 from './componentes/Navbar2';
import Banner from './componentes/Banner';
import Cards from './componentes/Cards';
import Cardapi from './componentes/Data';
import Отзывы from './componentes/Отзывы'
import Чтоэто from './componentes/Чтоэто'
import Контакты from './componentes/Контакты'
import Cardsh from './componentes/Cardsh';
function App() {
  return (
    <div className="App">
      



     <Navbar />
     <Navbar2/>
     <Banner/>
     <Cards/>
     
     {
        Cardapi.map(obj => {
          return <Cardsh  img={obj.img}/>
        })
      }



     <Routes >
         <Route path='отзывы'element={<Отзывы />} />
         <Route path='чтоэто'element={<Чтоэто />} />
         <Route path='контакты'element={<Контакты/>} />
     </Routes>
    </div>
  );
}

export default App;
