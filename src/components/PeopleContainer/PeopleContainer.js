import React, { useEffect, useState } from "react";
import FundContainer from "../FundContainer/FundContainer";
import Investmentor from "../Investmentor/Investmentor";
import "./PeopleContainer.css";

const PeopleContainer = () => {
    const [peoples, setPeoples] = useState([]);
    const [fund, setFund] = useState([]);
    // get data from people json local file 
    useEffect(() => {
        fetch("./people-data.json")
            .then((res) => res.json())
            .then((data) => {
                setPeoples(data);
            });
    }, []);
    // fund card hadler 
    const addFundHandeler = (people) => {
        const isExited = fund.find(p => p.id === people.id);

        if (isExited) {
            alert("This man exceeds his budget...")
        } else {
            const newPeople = [...fund, people];
            setFund(newPeople);
        }
    }
    //  total money collection calculation 
    let totalMoney = 0;
    for (const people of fund) {
        totalMoney += parseFloat(people.budget_amount);
    }
    console.log("this is come from peoples", peoples)

    return (
        <div className="container">
            {/* people disply section */}
            <div className="people-section">
                {
                    peoples.map((people) => (<Investmentor addFundHandeler={addFundHandeler} people={people} key={people.id}></Investmentor>))
                }
            </div>
            {/* fund people section */}
            <div className="fund-section">
                <h4>Investor: <span className="budget">{fund.length}</span></h4>
                <p className="total-fund">Total Fund Collected: $ <span className="budget">{totalMoney.toFixed(2)}</span></p>
                {
                    fund.map(people => <FundContainer people={people} key={people.email}></FundContainer>)
                }
            </div>
        </div>
    );
};

export default PeopleContainer;
