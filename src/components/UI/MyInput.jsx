import React from 'react';

const MyInput = ({...props}) => {
    return (
        <input className='my-input' type='text' {...props}>

        </input>
    );
};

export default MyInput;