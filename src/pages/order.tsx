import React from 'react'


import Nav from '../utils/nav';
import { PlaceOrderButton, Impress, TrackOrder } from '../utils/elements';
const Order: React.FC = () => {

    return (<>
        <TrackOrder />
        <Impress />
        <PlaceOrderButton />
        <Nav />
    </>);
}

export default Order;