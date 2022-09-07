import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="max_w">
          <div className="navbloc">
            <div className="blocone">
            <i class="fa-solid fa-phone"></i>
            &nbsp;&nbsp;
            <h4>+375 29 292-29-29 (VEL)</h4>
            &nbsp;&nbsp;
            <h4>+375 33 333-66-60 (МТС)</h4>
            </div>
            <div className="blocone">
            <i class="fa-solid fa-location-dot"></i>
            &nbsp;&nbsp;
            <h4>ваш город</h4>
            </div>
            <div className="blocone">
            <i class="fa-brands fa-instagram"></i>
            &nbsp;&nbsp;
            <h4>посетите нашу <br />
            страницу</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar