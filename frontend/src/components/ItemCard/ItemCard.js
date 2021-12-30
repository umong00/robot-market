import React, { useState } from 'react';
import { Button, InputNumber } from 'antd';
import moment from 'moment';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './ItemCard.scss';

const ItemCard = (props) => {
    const [qty, setQty] = useState(1);

    const {item} = props;
    const {name, image, material, stock} = item;
    const createdDate = moment(new Date(item.createdAt)).format('DD-MM-YYYY');
    const price = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.price);



    return (
        <>
            <div className="item-card">
                <div className="image-box">
                    <img src={image} />
                </div>
                <div className="item-details">
                    <span className="material">{material}</span>
                    <span className="name">{name}</span>
                    <b>{price}</b>
                    <span className={`${stock ? 'in-stock' : 'out-of-stock'}`}>Availability: {stock}</span>
                    <span>{createdDate}</span>
                </div>
                <div className="actions">
                    <InputNumber min={1} defaultValue={1} disabled={!stock} onChange={(e) => setQty(e)} />
                    <Button type="primary" disabled={!stock}>
                        <ShoppingCartOutlined />
                        Add to Cart
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ItemCard;