import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="footer padding">
        <div className="container">
          <div className="flex align-start">
            <div className="flex-40">
              <h3>Hydro Company</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                veniam autem illo recusandae sit velit adipisci ab perspiciatis
                voluptate. Eos fuga soluta necessitatibus provident ad culpa
                explicabo quod error maxime!
              </p>
            </div>
            <div className="flex-20">
              <h3>Company</h3>
              <nav>
                <ul>
                  <li>
                    <a href="#pro">About us</a>
                  </li>
                  <li>
                    <a href="#pro">Join our team</a>
                  </li>
                  <li>
                    <a href="#pro">Read blog</a>
                  </li>
                  <li>
                    <a href="#pro">Press</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex-20">
              <h3>Services</h3>
              <nav>
                <ul>
                  <li>
                    <a href="#pro">Pricing</a>
                  </li>
                  <li>
                    <a href="#pro">Documentation</a>
                  </li>
                  <li>
                    <a href="#pro">Support</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex-20">
              <h3>Find Us</h3>
              <address>
                AltCampus, Thehr, Khaniyara,
                <br />
                Kangra, Himachal Pradesh, 176218
              </address>
            </div>
          </div>
          <hr />
          <div className="flex footer-additional-info">
            <small> Copyright &copy; 2017 Your Company </small>
            <div className="flex">
              <p>Call us (+66) 010-020-0340</p>
              <nav>
                <ul className="flex">
                  <li className="social-media-item">
                    <a href="https://facebook.com" target="blank">
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li className="social-media-item">
                    <a href="https:/twitter.com" target="blank">
                      <FaTwitterSquare />
                    </a>
                  </li>
                  <li className="social-media-item">
                    <a href="https://instagram.com" target="blank">
                      <FaInstagramSquare />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
