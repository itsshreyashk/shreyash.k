import React from 'react'


import Nav from '../utils/nav';
import { PlaceOrderButton, Impress, TrackOrder } from '../utils/elements';
const Order: React.FC = () => {
    document.title = "Order Now";
    return (<>
        <TrackOrder />
        <Impress />
        <PlaceOrderButton />
        <Nav />
    </>);
}

export default Order;