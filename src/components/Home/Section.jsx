import React from 'react'
import './Section.css'

const Section = () => {
  return (
    <section className="section">
      <div className="section-content">
        <h1>EXTRA 20% OFF ON<br/>ORDERS ABOVE INR 4499</h1>
        <p>ONLY FOR ADICLUB MEMBERS</p>
        <div className='section-btns'>
          <button className="section-btn"><a href='/Men'>SHOP MEN</a></button>
          <button className="section-btn"><a href='/Women'>SHOP WOMEN</a></button>
        </div>
      </div>
    </section>
  );
}

export default Section

