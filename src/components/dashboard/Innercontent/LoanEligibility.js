import { useEffect, useState } from "react";
import CardTable from "./CardTable";
import { CardOptions } from "./Dropdowndata";


const LoanEligibility = ({onLoanSelection}) => {
    
    const [state, setState] = useState("SelectCard");

    const [card, setCard] = useState(true);
    const [cardone, setCardone] = useState(false);
    const [cardtwo, setCardtwo] = useState(false);

    useEffect(() => {
        state === "card1" ? setCard(true) : setCard(false);
        state === "card2" ? setCardone(true) : setCardone(false);
        state === "card3" ? setCardtwo(true) : setCardtwo(false);
    }, [state]);

    const handleOnchange = (e) => {
       setState(e.target.value);
    };

    return(
        <>
        <div className="loan_step1">
               <h4>Loan offers on credit card</h4>
               <h6>Step 1 : Check your loan eligibility</h6>
               <p className='card_select'>Choose the card on which you want to avail a loan: &nbsp; 
               <select className='sel_dropdown' onChange={handleOnchange} value={state} name="select card" id="select card">
                    {/* <option value="select card">select card</option>
                    <option value="213">213</option>
                    <option value="000">000</option>
                    <option value="001">001</option> */}
                    {CardOptions.map((item, index) => {
                        return <option value={item.value} key={index}>{item.name}</option>
                    })}
                </select>
               </p>
               <b>Select the loan option which suits your requirement:</b>
                
               {card && <CardTable onLoanSelect={(val) => onLoanSelection(val)} />}
               {cardone && <CardTable onLoanSelect={(val) => onLoanSelection(val)} />}
               {cardtwo && <CardTable onLoanSelect={(val) => onLoanSelection(val)} />}

               <span>Click here to learn more about credit/cash limit</span>
               <p>The loan options above are only for the card choosen by you. You can avail of loans on your other cards depending on your eligibility.</p>
           </div>
        </>
    )
}
export default LoanEligibility;