import React from 'react';

const Select = ({defaultValue, options, onChange, value}) => {
    return (
        <select
            className='my-select'
            onChange={e => onChange(e.target.value)}
            value={value}>

            <option disabled value={''}> {defaultValue} </option>

            { options.map(o => < option value={o.value} key={o.value}>{o.label}</option>)}
        </select>
    );
};

export default Select;