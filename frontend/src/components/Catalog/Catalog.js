import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import ItemCard from '../ItemCard/ItemCard';
import { cartData, showCart } from '../../App.recoil';
import './Catalog.scss';
import Cart from '../Cart/Cart';

const Catalog = (props) => {
    const {items} = props;

    const [cartItems, setCartItems] = useRecoilState(cartData);
    const displayCart = useRecoilValue(showCart);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    }

    const renderItemsCard = () => {
        return items.map((item, index) => (
            <ItemCard
                key={index}
                item={item}
                addToCart={addToCart}
            />
        ))
    }

    return (
        <div className="catalog">
            <div className={`items-catalog ${displayCart ? 'transition-items' : ''}`}>
                {renderItemsCard()}
            </div>
            {
                displayCart &&
                <Cart />
            }
        </div>
    )
}

export default Catalog;