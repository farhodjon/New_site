import React from 'react'
import "./Registiratsiya.css"
import Imges from '../imges/Vector.svg'
import Imges1 from '../imges/Vector1.svg'
import Imges2 from '../imges/Vector2.svg'
import Imges3 from '../imges/Vector3.svg'
import Imges4 from '../imges/Vector4.svg'
import Imges5 from '../imges/Vector5.svg'
const Registiratsiya = () => {
  return (
    <div className='Registiratsiya'>
        <h1>ФОРМА ЗАЯВКИ</h1>
        <img src={Imges} alt="" />
        <img src={Imges1} alt="" />
        <img src={Imges2} alt="" />
    <form >
     <input type="text" required placeholder='Ваше имя' />
     <input type="email" required placeholder='Ваш e-mail'/><br />
     <input type="text" required placeholder='Ваше сообщение (марка автомобиля, цвет ковриков, номер телефона)'/>
  <br />
    <input type="submit"  />
    </form>
        <img src={Imges3} alt="" />
        <img src={Imges4} alt="" />
        <img src={Imges5} alt="" />
        
    </div>
  )
}

export default Registiratsiya