import React from 'react';

const MyInput = ({...props}) => {
    return (
        <input className='my-input' {...props}>

        </input>
    );
};

export default MyInput;