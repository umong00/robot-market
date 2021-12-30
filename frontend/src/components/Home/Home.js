import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import { Spin } from 'antd';
import { fetchItemList } from '../../App.service';
import Catalog from '../Catalog/Catalog';
import './Home.scss';

const Home = () => {
    const [items, setItems] = useState([]);
    const {data, isLoading} = useQuery('Items', () => fetchItemList());

    useEffect(() => {
        if (data) {
            setItems(data);
        }
    }, [data])

    return (
        <div className="home">
            {
                isLoading && <Spin size="large" />
            }
            <Catalog items={items} />
        </div>
    )
}

export default Home;