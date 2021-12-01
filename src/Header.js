import logo from './logo.svg'

const Header = () => {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            <h1 className="app-header">Steak House</h1>
            <h4>- MENU -</h4>
        </header>
    )
};
export default Header