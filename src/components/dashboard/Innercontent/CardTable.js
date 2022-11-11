
const data = [
    { tenure: 6,  amount: '113000' },
    { tenure: 12, amount: '113000' },
    { tenure: 24, amount: '113000' },
    { tenure: 36, amount: '113000' },
    { tenure: 48, amount: '113000' }
  ];
const CardTable = ({onLoanSelect}) => {
    // console.log(onLoanSelection, 'onLoanSelection')
    return(
        <table>
            <thead>
            <tr>
                <th>Available tenure<br/> in months</th>
                <th></th>
                <th>Against your<br/> credit limit</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map((ele, index) => {
                    return <tr key={index}>
                        <td>{ele.tenure}</td>
                        <td><input type="radio" value={ [ele.tenure , ele.amount]} onChange={(e)=>onLoanSelect(e.target.value)} name='radio' /></td>
                        <td>{ele.amount}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    )
}
export default CardTable;