import React from 'react';

const MyButton = ({children,...props}) => {
    return (
        <button className='my-btn' {...props}>
            {children}
        </button>
    );
};

export default MyButton;