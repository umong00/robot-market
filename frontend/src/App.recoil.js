import { atom } from "recoil";

export const cartData = atom({
    key: 'cartItems',
    default: []
});

export const showCart = atom({
    key: 'showCart',
    default: false
})