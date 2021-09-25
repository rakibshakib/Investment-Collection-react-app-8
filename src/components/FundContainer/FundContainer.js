import React from 'react';
import './FundContainer.css';

const FundContainer = (props) => {
    const { first_name, last_name, image } = props.people;
    

    return (
        <div>
            <div className="fund-details">
                <figure className='fund-person'>
                    <img src={image} alt="" />
                </figure>

                <div>
                <h2 className='person-name'>{first_name} {last_name}</h2>
                <p>Investment Time: <span className="budget">1</span></p>
                </div>

            </div>
        </div>
    )
}

export default FundContainer
