import React, { useState } from 'react';
import { Button, InputNumber, Modal } from 'antd';
import moment from 'moment';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './ItemCard.scss';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartData, showCart } from '../../App.recoil';

const ItemCard = (props) => {
    const [qty, setQty] = useState(1);

    const setCartVisiblity = useSetRecoilState(showCart);
    const cartItems = useRecoilValue(cartData);

    const {item} = props;
    const {name, image, material, stock} = item;
    const createdDate = moment(new Date(item.createdAt)).format('DD-MM-YYYY');
    const price = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.price);

    const addToCart = () => {
        if (item.inCart) {
            setCartVisiblity(true);
        } else if (cartItems.length < 5) {
            item.inCart = true;
            item.qty = qty;
            props.addToCart(item)
        } else {
            openModal();
        }
    }

    const openModal = () => {
        Modal.error({
          title: 'Error!!',
          content: 'You can not add more than 5 items in the cart',
        });
      }

    return (
        <>
            <div className="item-card">
                <div className="image-box">
                    <img src={image} />
                </div>
                <div className="item-details">
                    <span className="material">{material}</span>
                    <span className="name">{name}</span>
                    <b className="price">{price}</b>
                    <span className={`${stock ? 'in-stock' : 'out-of-stock'}`}>Availability: {stock}</span>
                    <span>{createdDate}</span>
                </div>
                <div className="qty-box">
                    <span>Qty: </span>
                    <InputNumber min={1} max={stock || 10} defaultValue={1} disabled={!stock} onChange={(e) => setQty(e)} />
                </div>
                <div className="actions">
                    <Button type="primary" disabled={!stock} onClick={addToCart}>
                        <ShoppingCartOutlined />
                        {
                            item.inCart ? 'Go to Cart' : 'Add to Cart'
                        }
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ItemCard;