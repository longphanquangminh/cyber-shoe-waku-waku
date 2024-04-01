import { Link } from "waku";

export const Footer = () => {
  return (
    <footer className='footer section'>
      <div className='footer__container grid'>
        <div className='footer__box'>
          <h3 className='footer__title'>LP</h3>
          <p className='footer__description'>New collection of shoes 2024.</p>
        </div>

        <div className='footer__box'>
          <h3 className='footer__title'>EXPLORE</h3>
          <ul>
            <li>
              <Link to='/' className='footer__link'>
                Home
              </Link>
            </li>
            <li>
              <a href='#featured' className='footer__link'>
                Featured
              </a>
            </li>
            <li>
              <a href='#women' className='footer__link'>
                Women
              </a>
            </li>
            <li>
              <a href='#new' className='footer__link'>
                New
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__box'>
          <h3 className='footer__title'>SUPPORT</h3>
          <ul>
            <li>
              <Link to='/' className='footer__link'>
                Product Help
              </Link>
            </li>
            <li>
              <Link to='/' className='footer__link'>
                Customer Care
              </Link>
            </li>
            <li>
              <Link to='/' className='footer__link'>
                Athorized service
              </Link>
            </li>
          </ul>
        </div>

        <div className='footer__box'>
          <Link to='/' className='footer__social'>
            <i className='bx bxl-facebook'></i>
          </Link>
          <Link to='/' className='footer__social'>
            <i className='bx bxl-instagram'></i>
          </Link>
          <Link to='/' className='footer__social'>
            <i className='bx bxl-twitter'></i>
          </Link>
          <Link to='/' className='footer__social'>
            <i className='bx bxl-google'></i>
          </Link>
        </div>
      </div>
      <p className='footer__copy'>&#169; 2024 Long Phan. All right reserved</p>
    </footer>
  );
};
