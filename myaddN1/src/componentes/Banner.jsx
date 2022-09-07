import React from 'react';
import Rasm3 from '../img/rasm3.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="max_w">
            <div className="banbloc">
                <div className="bloctri">
                    <h1>Инновационные коврики <br /> 
                        для автомобиля</h1>
                    <p>в вашем городе</p>
                    <button className='btn1'>ЗАКАЗАТЬ</button>
                </div>
                <div className="bloctri">
                    <img src={Rasm3} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Banner