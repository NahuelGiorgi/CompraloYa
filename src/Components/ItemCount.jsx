import { useState} from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [items, setItems] = useState(initial);
    let availableStock = stock - items;

    const changeStock = (e) => {
        e.preventDefault();

        if (e.target.innerText === '-') {
            setItems(items - 1);
        };
        if (e.target.innerText === '+') {
            setItems(items + 1);
        }
    };

    return (
        <form className="item-count">
            <span className="stock">Stock Disponible: {availableStock}</span>
            <div className="container">
                <button className="resta" onClick={(e) => changeStock(e)} disabled={items <= 0}>-</button>
                <input className="input-number" type="number" value={items} placeholder={initial} ></input>
                <button className="suma" onClick={(e) => changeStock(e)} disabled={items >= stock}>+</button>
            </div>
            <button className="btn --big" onClick={(e) =>{ onAdd(e, items); setItems(0)}}>Agregar al carrito</button>
        </form>
    );
};

export default ItemCount;