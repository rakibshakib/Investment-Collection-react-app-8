import React from 'react';
import './Investmentor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate } from '@fortawesome/free-solid-svg-icons'

const Investmentor = (props) => {
    // create fontawsome icon element 
    const element = <FontAwesomeIcon icon={faDonate} />
    console.log(props.people);
    console.log("this is destr", props.people.first_name);
    // destructuring object here
    const { first_name, last_name, budget_amount, email, image, age, mobile, city } = props.people;
    const {addFundHandeler} = props;
    return (
        // people card 
        <div className="investmentor">
            <figure className="card-img">
                <img src={image} alt="" />
            </figure>
            <div className="people-details">
                <h5>{first_name} {last_name}</h5>
                <p>email: {email}</p>
                <p>Phone: {mobile}</p>
                <p>City: {city}</p>
                <p>Age: {age}</p>
                <p>Budget: $<span className='budget'>{budget_amount}</span> </p>
            </div>
            <button className='add-invest' onClick={()=> addFundHandeler(props.people)}>{element}  Add To Invest</button>
        </div>
    )
}

export default Investmentor
