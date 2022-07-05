import CartWidget from './CartWidget';
import './navbar.css';

function Navbar () {
return (
    <header classname= 'navbar'>
    <button>Home</button>
    <a src="#">Tienda</a>
    <p>contactos</p>
    <p>Somos</p>
    <a>Empresas</a>
    <CartWidget/>
    </header>
);
}
export default Navbar;