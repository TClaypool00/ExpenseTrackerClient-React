import { useState, useEffect } from "react"
import DropDown from "../../components/companies/DropDown"
import { companyDropDown } from '../../API';
import { tokenExpired } from '../../helpers/Auth';

function AddLoan() {
    const [loanName, setLoanName] = useState('');
    const [amount, setAmount] = useState(0);
    const [remainingAmt, setRemaining] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [dueDate, setDateDue] = useState('');
    const [companyId, setCompanyId] = useState(0);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const error = document.getElementById('error');

        companyDropDown()
            .then(resp => {
                setCompanies(resp.data);
            }).catch(err => {
                tokenExpired(err);
                error.innerHTML = err.response.data.message;
            })
    }, [])

    return (
        <>
            <h2>Add a loan</h2>
            <form method="post">
            <input type="text" id='txtLoanName' onChange={e => setLoanName(e.target.value)} placeholder='Nickname' />
                <input type="number" id='amountDue' onChange={e => setAmount(e.target.value)} placeholder='Amount due' />
                <input type="number" id="remainingAmt" onChange={e => setRemaining(e.target.value)} placeholder='Remaining amount' />
                <input type="number" id="totalAmt" onChange={e => setTotalAmount(e.target.value)} placeholder='Total amount' />
                <input type="date" id="dateDue" onChange={e => setDateDue(e.target.value)} />
                <DropDown companies={companies} />
                <button className="btn">Add</button>
            </form>
        </>
    )
}

export default AddLoan