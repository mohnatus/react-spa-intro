import React from 'react';
import './PortfolioItem.css';

function PortfolioItem({ work }) {
    return (
        <a href={work.link} className='portfolio-item'>
            <img
                className='portfolio-item__screenshot'
                src={work.screenshot}
                alt={work.title}
            />
            <div className='portfolio-item__title'>{work.title}</div>
        </a>
    );
}

export default PortfolioItem;
