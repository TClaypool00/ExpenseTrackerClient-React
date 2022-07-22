import React, { useState, useEffect, useRef } from 'react'
import { companyDropDown, create } from '../../API';
import { tokenExpired } from '../../helpers/Auth';
import DropDown from '../../components/companies/DropDown';
import { LoanModel } from '../../models/LoanModel';
import { getSuccessMessage, getErrorMessage, textFadeOut } from '../../helpers/helpers';
import { useNavigate } from 'react-router-dom';

function AddLoan() {
    const [loanName, setLoanName] = useState('');
    const [amount, setAmount] = useState(0);
    const [remainingAmt, setRemaining] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [dueDate, setDateDue] = useState('');
    const [companyId, setCompanyId] = useState(0);
    const [companies, setCompanies] = useState([]);

    const errorMessage = document.getElementById('error');
    const success = document.getElementById('success');
    const form = useRef(null);
    const nav = useNavigate();

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

    function postLoan(e) {
        e.preventDefault();
        let loanNameTxt = form.current.getElementsByTagName('input')[0];
        create('loans', new LoanModel(loanName, amount, totalAmount, remainingAmt, companyId, dueDate))
            .then(resp => {
                success.innerHTML = getSuccessMessage(resp);
                if (window.confirm('Would you like add another loan?')) {
                    e.target.reset();
                    loanNameTxt.focus();
                    textFadeOut(success);
                } else {
                    nav('/');
                }
            })
            .catch(err => {
                errorMessage.innerHTML = getErrorMessage(err);
                loanNameTxt.focus();
            })
    }

    return (
        <>
            <h2>Add a loan</h2>
            <form method="post" onSubmit={postLoan} ref={form}>
            <input type="text" id='txtLoanName' onChange={e => setLoanName(e.target.value)} placeholder='Nickname' />
                <input type="number" id='amountDue' onChange={e => setAmount(e.target.value)} placeholder='Amount due' />
                <input type="number" id="remainingAmt" onChange={e => setRemaining(e.target.value)} placeholder='Remaining amount' />
                <input type="number" id="totalAmt" onChange={e => setTotalAmount(e.target.value)} placeholder='Total amount' />
                <input type="date" id="dateDue" onChange={e => setDateDue(e.target.value)} />
                <DropDown companies={companies} selectCompanyId={setCompanyId} />
                <button className="btn">Add</button>
            </form>
        </>
    )
}

export default AddLoan