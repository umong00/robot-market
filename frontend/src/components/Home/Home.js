import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import { Spin } from 'antd';
import { fetchItemList } from '../../App.service';
import Catalog from '../Catalog/Catalog';
import './Home.scss';
import FilterMenu from '../FilterMenu/FilterMenu';

const Home = () => {
    const [items, setItems] = useState([]);
    const [materialTypes, setMaterialTypes] = useState([]);
    const {data, isLoading, isSuccess} = useQuery('Items', () => fetchItemList());

    const getMaterialTypes = (data) => {
        const types = data.map(item => item.material);
        setMaterialTypes([... new Set(types)]);
    }

    useEffect(() => {
        if (data) {
            getMaterialTypes(data);
            setItems(data);
        }
    }, [data]);

    const filterItemList = (selectedFilters) => {
        if (selectedFilters.length) {
            const filteredData = data.filter((item) => selectedFilters.includes(item.material));
            setItems(filteredData);
        } else {
            setItems(data);
        }
    }

    return (
        <div className="home">
            {
                isLoading &&
                <div className="loader">
                    <Spin size="large" />
                </div>
            }
            {
                isSuccess && items.length &&
                <div className="view-port">
                    <FilterMenu materialTypes={materialTypes} filterItemList={filterItemList} />
                    <Catalog items={items} />
                </div>
            }
        </div>
    )
}

export default Home;