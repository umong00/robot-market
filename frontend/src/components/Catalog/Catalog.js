import React from 'react';
import { useRecoilState } from 'recoil';
import ItemCard from '../ItemCard/ItemCard';
import { cartData } from '../../App.recoil';

import './Catalog.scss';

const Catalog = (props) => {
    const {items} = props;

    const [cartItems, setCartItems] = useRecoilState(cartData);

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
        <div className="items-catalog">
            {renderItemsCard()}
        </div>
    )
}

export default Catalog;