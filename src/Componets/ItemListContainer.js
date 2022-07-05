import './ItemListContainer.css';
import ItemCount from './ItemCount';


function ItemListContainer (props) {

    const onAdd = (quantify) => {
        console.log ("Compraste ${quantify} unidades"); 
    }
return (
    <div className= 'Catalogo'>
        <h4>{props.greeting}</h4>
        <ItemCount initial={1} stock={25} onAdd={onAdd}/>
    </div>  
);
}

export default ItemListContainer;