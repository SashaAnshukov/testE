import logo from '../../images/SpaceX-Logo-PNG.png';

function Header({children}) {

    return (
        <header className="header">
            <a className="header__logo" href='https://www.spacex.com/' target="_blank" rel="noreferrer noopener">
                <img src={logo} alt="логотип SpaceX"></img>
            </a>
            {children}
        </header>
    );
}

export default Header;