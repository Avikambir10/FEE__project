import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="/Contact">contact us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="/">shoes</a>
                </li>
                <li>
                  <a href="/Men">men</a>
                </li>
                <li>
                  <a href="/Women">women</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/adidas/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://twitter.com/adidas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.instagram.com/adidas/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/company/adidas">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-2">
        <p>Privacy Policy</p>
        <p className="border">Terms and Conditions</p>
        <p>Cookies</p>
      </div>
    </div>
  );
}

export default Footer
