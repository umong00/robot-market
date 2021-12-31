import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { cartData } from '../../App.recoil';
import { InputNumber } from 'antd';
import './Cart.scss';

const Cart = () => {
    const cartItemList = useRecoilValue(cartData);
    const [items, setItems] = useState();

    useEffect(() => {
        setItems(JSON.parse(JSON.stringify(cartItemList)));
    }, [cartItemList])

    const changeQuantity = (value, index) => {
        items[index].qty = value;
        setItems([...items])
    }

    const renderCartItems = () => {
        return items.map((item, index) => {
            const price = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.price);

            return (
                <div key={index} className="cart-item-card">
                    <div className="img-box">
                        <img src={item.image} />
                    </div>
                    <div className="cart-item-details">
                        <div className="flex-div">
                            <span>{item.name}</span>
                            <b>{price}</b>
                        </div>
                        <span className="material">{item.material}</span>
                        <div className="flex-div">
                            <span className="in-stock">Available Units: {item.stock}</span>
                            <InputNumber min={1} defaultValue={item.qty} max={item.stock} onChange={(value) => changeQuantity(value, index)} />
                        </div>
                        <div>
                            <span className="total-price">Total: <b>{new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.price * item.qty)}</b></span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="cart displayCart">
            <div className="title">
                <h3>My Cart ({cartItemList.length})</h3>
            </div>
            <div>
                {items && renderCartItems()}
            </div>
        </div>
    )
}

export default Cart;