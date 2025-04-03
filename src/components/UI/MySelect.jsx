import React from 'react';

const MySelect = ({defaultValue,options,value,onChange}) => {
    return (
       <select className='my-select' value={value} onChange={(e) => onChange(e.target.value)}>
           <option value='' disabled >{defaultValue}</option>
           {options.map(o => <option value={o.value} key={o.value}>{o.name}</option>)}
       </select>
    );
};

export default MySelect;