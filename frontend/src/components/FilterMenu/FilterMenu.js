import React, { useState } from 'react';
import { Checkbox } from 'antd';
import './FilterMenu.scss';

const FilterMenu = (props) => {

    const [selectedFilters, setSelectedFilters] = useState([]);

    const onFilterChange = (value) => {
        setSelectedFilters(value);
        props.filterItemList(value);
    }

    const clearAllFilters = () => {
        setSelectedFilters([]);
        props.filterItemList([]);
    }

    return (
        <div className="filter-menu">
            <div className="filter-header">
                <h4>FILTERS ({selectedFilters.length})</h4>
                <span className="clear-all" onClick={clearAllFilters}>Clear all</span>
            </div>

            <div className="filter-material">
                <span>Material Types</span>
            </div>
            <div>
                <Checkbox.Group options={props.materialTypes} value={selectedFilters} onChange={onFilterChange} />
            </div>
        </div>
    )
}

export default FilterMenu;