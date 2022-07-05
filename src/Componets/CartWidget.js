import './CartWidget.css';
import imgcarrito from './img/carrito.jpg';

function CartWidget () {
return (
    <div classname= 'CartWidget'>
        <img src={imgcarrito}></img>
    </div>  
);
}

export default CartWidget;