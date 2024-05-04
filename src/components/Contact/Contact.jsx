import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="container-1">
      <h1>Connect With Us</h1>
      <p>
        We would love to respond to your queries and help you succeed.
        <br/>
        Feel free to get in touch with us.
      </p>
      <div className='contact-box'>
        <div className='contact-left'>
          <h3>Sent your request</h3>
          <form>
            <div className='input-row'>
              <div className='input-group'>
                <label>Name</label>
                <input type='text' placeholder='Example'></input>
              </div>
              <div className='input-group'>
                <label>Phone</label>
                <input type='text' placeholder='+91 7710998832'></input>
              </div>
            </div>
            <div className='input-row'>
              <div className='input-group'>
                <label>Email</label>
                <input type='email' placeholder='example@gmail.com'></input>
              </div>
              <div className='input-group'>
                <label>Subject</label>
                <input type='text' placeholder='Project Demo'></input>
              </div>
            </div>
            <label>Message</label>
            <textarea rows={5} placeholder='Your Message'></textarea>
            <button className='submit-btn' type='submit'>SEND</button>
          </form>
        </div>
        <div className='contact-right'>
          <h3>Reach us</h3>
          <table>
          <tbody>
            <tr>
              <td>Email</td>
              <td>contactus@example.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>+91 7000970009</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>#212, Gronf floor, 7th cross<br/>
              some layout, Some Road, Koromangla<br/>
              Bengluru 560001
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contact