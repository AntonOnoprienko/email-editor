import React from 'react';
import Select from "./Select.jsx";

const PostFilter = ({filter, setFilter}) => {
    const options = [{
        value: 'title',
        label: 'Сортировка по названию'
    }, {
        value: 'body',
        label: 'Сортировка по описанию'
    }]
    return (
        <div>
            <Select
                options={options}
                defaultValue={'сортировка'}
                value={filter.sort}
                onChange={(sort) => setFilter({...filter, sort: sort})}
            />

            <input
                className={'my-input'}
                type={'text'}
                value={filter.query}
                placeholder={'Поиск...'}
                onChange={e => setFilter({...filter,query: e.target.value})}
            />
        </div>
    );
};

export default PostFilter;