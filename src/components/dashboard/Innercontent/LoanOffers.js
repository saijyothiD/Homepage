import './LoanOffers.css';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import LoanEligibility from './LoanEligibility';
import LoanAmount from './LoanAmount';
import LoanFunds from './LoanFunds';

 
const LoanOffers = () => {
    const [radiovalue, setRadioValue] = useState("");
    return(
        <div className='main_loanoffer'>
             <LoanEligibility onLoanSelection={(val) => setRadioValue(val)} />
             <LoanAmount onLoanAmount={radiovalue} />
             <LoanFunds />
            <div className="loan_step1">
               <h6>Get funds instantly</h6>
               <ul>
                  <li><p>This is a straight through for availing loan on Citi credit card. To know more <a href='/'>click here</a> (FAQ).</p></li>
               </ul>
            </div>
            <Outlet />
        </div>
    )
}
export default LoanOffers;