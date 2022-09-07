import React from 'react';
import Rasm1 from '../img/Vector.png';
import Rasm2 from '../img/EVARUGS.png';




const Navbar2 = () => {
  return (
    <div className='navbar2'>
        <div className="max_w">
           <div className="bar2bloc">
           <div className="bloctu">
                <img className='img' src={Rasm1} />
                <img className='img rasm' src={Rasm2} />

            </div>
            <div className="bloctu">
                <ul>
                    <li><a href="#">отзывы</a></li>
                    <li><a href="#">что это?</a></li>
                    <li><a href="#">контакты</a></li>
                </ul>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar2