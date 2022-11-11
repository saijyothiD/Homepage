import { useState } from "react";
import Capture from '../../../images/Capture.PNG';

const LoanAmount = ({onLoanAmount}) => {
  const [textValue, setTextValue] = useState("");
  console.log("onLoanAmount",onLoanAmount);

  function countRoi(){
    var initialvalue=onLoanAmounts[1]||textValue;
    var si=(initialvalue*12*5)/100;
    return si;
  }
  let onLoanAmounts=onLoanAmount.split(',');
  console.log("jyothi",onLoanAmounts[1]);

  const loanAmountHandler = (e) => {
    setTextValue(e.target.value)
  }
  return(
    <>
      <div className="loan_step1">
          <h6>Step 2 : Choose your loan amount</h6>
          <p>Loan tenure: <img src={Capture} alt='Capture' width={25} height={25} /><span>{onLoanAmounts[0]}</span></p>
          <div className='loan_amount row'>
            <p className='col-md-6'>Specify the exact loan amount you wish to avail of: (in Rupees)</p>
            <div className='amount_value col-md-6'>
              {/* {onLoanAmount?( */}
              <input type="number" value={onLoanAmounts[1] || textValue} onChange={loanAmountHandler} name="num" id="num" />
              {/* ):<input type="number" value={textValue} onChange={(e)=>{setTextValue(e.target.value)}} name="num" id="num" />} */}
              <label>(The amount displayed above is the maximum loan amount you are eligible for. You can edit the Loan Amount to a lesser value to suit your requirments)</label>
            </div>
          </div>
          <ul>
          <li><p>For the above loan amount:<span>{onLoanAmounts[1] || textValue}</span></p></li>
          <li><p>Your initial interest Amount will be: <img src={Capture} alt='Capture' width={25} height={25} /> <span>Rs.{countRoi()}</span></p></li>
          <li><p>Your EMI (Equated Monthly Installments) will be: <img src={Capture} alt='Capture' width={25} height={25} /> <span>Rs.</span></p></li>
          <li><p>At an annual reducing balance interest rate of <em></em><span>5%</span></p></li>
          </ul>
      </div>
    </>
  )
}
export default LoanAmount;