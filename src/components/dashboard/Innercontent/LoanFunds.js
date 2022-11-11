import { Education, Employment, LoanAmount, LoanPurpose, Profession } from "./Dropdowndata";

const LoanFunds = () => {
    return(
        <div className="loan_step1">
               <h6>Step 3 : Please provide the details to get your funds instantly</h6>
               <div className='booking_details'>
                    <h6>Booking details</h6>
                    <div className='booking_amount row'>
                        <p className='col-sm-8'>Citibank account to credit the loan amount:</p>
                        <div className='drop_down col-sm-4'>
                            <select name="Select amount" id="Select amount">
                                {/* <option value="Select amount">Select amount</option>
                                <option value="3000">3000</option>
                                <option value="4000">4000</option>
                                <option value="5000">5000</option> */}
                                {LoanAmount.map((item, index) => {
                                    return <option key={index}>{item.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='booking_amount row'>
                        <p className='col-sm-8'>Purpose of loan</p>
                        <div className='drop_down col-sm-4'>
                            <select  name="Select purpose" id="Select purpose">
                                {/* <option value="Select purpose">Select purpose</option>
                                <option value="3000">purpose1</option>
                                <option value="4000">purpose2</option>
                                <option value="5000">purpose3</option> */}
                                {LoanPurpose.map((item, index) => {
                                    return <option key={index}>{item.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
               </div>
               <div className='booking_details personal_des'>
                    <h6>Personal details</h6>
                    <div className='booking_amount row'>
                        <p className='col-sm-5'>Employment:</p>
                        <div className='drop_down col-sm-7'>
                            <select name="Select Employment" id="Select Employment">
                                {/* <option value="Select Employment">Select Employment</option>
                                <option value="3000">UI developer</option>
                                <option value="4000">Backend developer</option>
                                <option value="5000">Administrator</option> */}
                                {Employment.map((item, index) => {
                                    return <option key={index}>{item.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='booking_amount row'>
                        <p className='col-sm-5'>Profession</p>
                        <div className='drop_down col-sm-7'>
                            <select name="Select Profession" id="Select Profession">
                                {/* <option value="Select Profession">Select Profession</option>
                                <option value="3000">software</option>
                                <option value="4000">business</option>
                                <option value="5000">self-employee</option> */}
                                {Profession.map((item, index) => {
                                    return <option key={index}>{item.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='booking_amount row'>
                        <p className='col-sm-5'>Education</p>
                        <div className='drop_down col-sm-7'>
                            <select  name="Select Education" id="Select Education">
                                {/* <option value="Select Education">Select Education</option>
                                <option value="3000">Btech</option>
                                <option value="4000">Mtech</option>
                                <option value="5000">Bsc</option> */}
                                {Education.map((item, index) => {
                                    return <option key={index}>{item.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
               </div>
            </div>
    )
}
export default LoanFunds;