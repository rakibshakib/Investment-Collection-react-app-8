import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h2 className='brand-name'>Investment Collection</h2>
            <p className="name-details">Investment Collection for Annual Cultural Program - 2021</p>
            <h3 className='total-budget'>Total Budget: $<span className='budget'>100,000</span></h3>
            <hr />
        </div>
    )
}

export default Header
