import React from 'react';
import MyInput from '../UI/input/MyInput';

const Filter = ({filter, setFilter}) => {
    return (
        <MyInput
        value = {filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder='Поиск...'
        />
    );
};

export default Filter;