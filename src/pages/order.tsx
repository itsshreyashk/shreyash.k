import React from 'react'


import Nav from '../utils/nav';
import { PlaceOrderButton, Impress } from '../utils/elements';
const Order: React.FC = () => {
    document.title = "Order Now";
    return (<>
        <Impress />
        <PlaceOrderButton />
        <Nav />
    </>);
}

export default Order;