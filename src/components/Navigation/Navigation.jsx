import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import Home from '../Home'
import Men from '../Men'
import Women from '../Women'
import Contact from '../Contact/Contact'
import Login from '../Login/Login';
import Cart from '../Cart';
import '../Navigation/Navigation.css'

const Navigation = () => {
  return (
    <>
      <nav>
        <div>
          <img className='logo' src={'https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg'} alt='logo'/>
        </div>
        <ul>
          <li><Link className='link home' to='/'>HOME</Link></li>
          <li><Link className='link' to='/Men'>MEN</Link></li>
          <li><Link className='link' to='/Women'>WOMEN</Link></li>
          <li><Link className='link contact' to='/Contact'>CONTACT</Link></li>
        </ul>
        <div className='btn'>
          <button className="login"><Link className='link' to='/Login'>LOGIN</Link></button>
          <button className="cart"><Link className='link' to='/Cart'>CART</Link></button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Men" element={<Men></Men>}></Route>
        <Route path="/Women" element={<Women></Women>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path='/Cart' element={<Cart></Cart>}></Route>
      </Routes>
    </>
  )
}

export default Navigation
