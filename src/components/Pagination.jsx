import React from 'react';

export const Pagination = ({totalPages,onChange, page}) => {
    const pages = Array.from({length: totalPages},(_,index) => index + 1)
    return (
        <div className='paginator'>
            {pages.map((p,i) => <p key={i} onClick={() => onChange(p)}
                                   className={p === page ? 'page active' : 'page'}>{p}</p>)}
        </div>
    );
};
