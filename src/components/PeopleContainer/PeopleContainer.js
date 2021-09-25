import React, { useEffect, useState } from "react";
import FundContainer from "../FundContainer/FundContainer";
import Investmentor from "../Investmentor/Investmentor";
import "./PeopleContainer.css";

const PeopleContainer = () => {
    const [peoples, setPeoples] = useState([]);
    const [fund, setFund] = useState([]);
    useEffect(() => {
        fetch("./student-data.json")
            .then((res) => res.json())
            .then((data) => {
                setPeoples(data);
            });
    }, []);
    const addFundHandeler = (people) => {
        const newPeople = [...fund, people];
        setFund(newPeople);
    }
    let totalMoney = 0;
    for (const people of fund) {
        totalMoney += parseFloat(people.budget_amount);
    }
    return (
        <div className="container">
            <div className="people-section">
                {
                    peoples.map((people) => (<Investmentor addFundHandeler={addFundHandeler} people={people} key={people.id}></Investmentor>))
                }
            </div>
            <div className="fund-section">
                <h4>Investor: {fund.length}</h4>
                <p className="total-fund">Total Fund Collected: <span className="budget">{totalMoney.toFixed(2)}</span></p>
                {
                    fund.map(people=> <FundContainer people={people} key={people.email}></FundContainer>)
                }
            </div>
        </div>
    );
};

export default PeopleContainer;
