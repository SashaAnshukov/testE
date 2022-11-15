import { Link } from 'react-router-dom';

function NavBar() {

  const NavBarLink = "NavBar__link_text opacity"

  function handleClick (event) {
    event.preventDefault()
  }

  
  
  return (
    <nav className="NavBar__container">

          <div className="NavBar__link">
            <Link onClick={handleClick} to="/" className={NavBarLink}> Главная </Link>
            <Link onClick={handleClick} to="/"className={NavBarLink}> Технологии </Link>
            <Link onClick={handleClick} to="/" className={NavBarLink}> График полетов </Link>
            <Link onClick={handleClick} to="/" className={NavBarLink}> Гарантии </Link>
            <Link onClick={handleClick} to="/" className={NavBarLink}> О компании </Link>
            <Link onClick={handleClick} to="/" className={NavBarLink}> Контакты </Link>
          </div>

          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <div className="menu__overlay"></div>
            <ul className="menu__box">
              <Link onClick={handleClick} to="/" className="menu__item"> Главная </Link>
              <Link onClick={handleClick} to="/" className="menu__item"> Технологии </Link>
              <Link onClick={handleClick} to="/" className="menu__item"> График полетов </Link>
              <Link onClick={handleClick} to="/" className="menu__item"> Гарантии </Link>
              <Link onClick={handleClick} to="/" className="menu__item"> О компании </Link>
              <Link onClick={handleClick} to="/" className="menu__item"> Контакты </Link>
            </ul>
          </div>

    </nav>
  );
}

export default NavBar;