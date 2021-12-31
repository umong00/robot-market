import * as React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import {useRecoilState, useRecoilValue} from "recoil";
import './Header.scss';
import { cartData, showCart } from '../../App.recoil';

const Header = () => {

    const [cartVisibility, setCartVisiblity] = useRecoilState(showCart);
    const cartItems = useRecoilValue(cartData);

    const openCart = () => {
        setCartVisiblity(!cartVisibility);
    }

    return (
        <>
            <div className="header">
                <div className="cart-icon">
                    <Badge onClick={openCart} count={cartItems.length}>
                        <ShoppingCartOutlined />
                    </Badge>
                </div>
            </div>
        </>
    )
}

export default Header;