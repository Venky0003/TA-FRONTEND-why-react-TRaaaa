import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

function Header() {
  return (
    <header className="navbar">
      <div className="container flex">
        <div className="flex">
          <a className="brand" href="#brand">
            <strong>Hydro</strong>
          </a>
          <nav>
            <ul className="flex nav-menu nav-menu-primary">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#work">Our Work</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="flex nav-menu nav-menu-secondary">
            <li className="social-media-item">
              <a href="https://facebook.com" target="blank">
                <FaFacebookSquare />
              </a>
            </li>
            <li className="social-media-item">
              <a href="https://twitter.com" target="blank">
                <FaTwitterSquare />
              </a>
            </li>
            <li className="social-media-item">
              <a href="https://instagram.com">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a className="btn btn-primary" href="#login">
                {' '}
                Sign in / Join{' '}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
