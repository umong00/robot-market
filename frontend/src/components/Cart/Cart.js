import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { cartData } from '../../App.recoil';
import { InputNumber } from 'antd';
import './Cart.scss';

const Cart = () => {
    const [qty, setQty] = useState();
    const cartItemList = useRecoilValue(cartData);

    const renderCartItems = () => {
        return cartItemList.map((item, index) => {
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
                            <InputNumber min={1} defaultValue={item.qty} max={item.stock} onChange={(value) => setQty(value)} />
                        </div>
                        <div>
                            <span className="total-price">Total: <b>{new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.price * (qty || item.qty))}</b></span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="cart">
            <div className="title">
                <h3>My Cart</h3>
            </div>
            <div>
                {renderCartItems()}
            </div>
        </div>
    )
}

export default Cart;