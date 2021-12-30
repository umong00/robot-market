import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

import './Catalog.scss';

const Catalog = (props) => {
    const {items} = props;

    const renderItemsCard = () => {
        return items.map((item, index) => (
            <ItemCard
                key={index}
                item={item}
            />
        ))
    }

    return (
        <div className="items-catalog">
            {renderItemsCard()}
        </div>
    )
}

export default Catalog;