import React from 'react';
import './Investmentor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate } from '@fortawesome/free-solid-svg-icons'

const Investmentor = (props) => {
    const element = <FontAwesomeIcon icon={faDonate} />
    const { first_name, last_name, budget_amount, email, image, age } = props.people;
    const {addFundHandeler} = props;
    return (
        <div className="investmentor">
            <figure className="card-img">
                <img src={image} alt="" />
            </figure>
            <div className="people-details">
                <h5>{first_name} {last_name}</h5>
                <p>email: {email}</p>
                <p>Age: {age}</p>
                <p>Budget: $<span className='budget'>{budget_amount}</span> </p>
            </div>
            <button className='add-invest' onClick={()=> addFundHandeler(props.people)}>{element}  Add To Invest</button>
        </div>
    )
}

export default Investmentor