import React from 'react'


import Nav from '../utils/nav';
import { PlaceOrderButton, Impress } from '../utils/elements';
const Home: React.FC = () => {

    return (<>
        <Impress />
        <PlaceOrderButton />
        <Nav />
    </>);
}

export default Home;