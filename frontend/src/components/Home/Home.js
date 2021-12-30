import React, {useEffect} from 'react';
import {useQuery} from "react-query";
import { fetchItemList } from '../../App.service';
import './Home.scss';

const Home = () => {
    const {data} = useQuery('Items', () => fetchItemList());

    return (
        <div className="home">
            Home
        </div>
    )
}

export default Home;