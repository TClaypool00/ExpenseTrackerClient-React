import { useState, useEffect } from 'react';
import DropDown from '../../components/companies/DropDown';
import { companyDropDown, create, update } from '../../API';
import { getErrorMessage, getSuccessMessage, textFadeOut } from '../../helpers/helpers';
import { tokenExpired } from '../../helpers/Auth';
import { LoanModel } from '../../models/LoanModel';

export function LoanForm({ loan }) {
    const [loanName, setLoanName] = useState('');
    const [amount, setAmount] = useState('');
    const [remainingAmt, setRemaining] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [dueDate, setDateDue] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [companies, setCompanies] = useState([]);
    const [isActive, setIsActive] = useState(true);

    const errorMessage = document.getElementById('error');
    const success = document.getElementById('success');

    useEffect(() => {
        if (loan) {
            setCompanies(loan.comapnies);
            setLoanName(loan.name);
            setAmount(loan.monthlyAmountDue);
            setTotalAmount(loan.totalAmountDue);
            setRemaining(loan.remainingAmount);
            setIsActive(loan.isActive);
            setDateDue(loan.dateDue);
            setCompanies(loan.comapnies);
        } else {
            companyDropDown()
                .then(resp => {
                    setCompanies(resp.data);
                })
                .catch(err => {
                    tokenExpired(err);
                    errorMessage.innerHTML = getErrorMessage(err);
                    textFadeOut(errorMessage);
                })
        }
    })

    function formSubmit(e) {
        e.preventDefault();
        let loanModel = new LoanModel(loanName, amount, totalAmount, remainingAmt, companyId, dueDate, isActive)

        if (loan) {
            update('loans', loanModel, loan.loanId)
                .then(resp => {
                    success.innerHTML = getSuccessMessage(resp);
                    textFadeOut(success);
                })
                .catch(err => {
                    tokenExpired(err);
                    errorMessage.innerHTML = getErrorMessage(err);
                    textFadeOut(errorMessage);
                })
        } else {
            create('loans', loanModel)
                .then(resp => {
                    success.innerHTML = getSuccessMessage(resp);
                    textFadeOut(success);
                })
                .catch(err => {
                    tokenExpired(err);
                    errorMessage.innerHTML = getErrorMessage(err);
                    textFadeOut(errorMessage);
                })
        }
    }

    return (
        <form method="post" onSubmit={formSubmit}>
            <input type="text" id='txtLoanName' value={loanName} onChange={e => setLoanName(e.target.value)} placeholder='Nickname' />
            <input type="number" id='amountDue' value={amount} onChange={e => setAmount(e.target.value)} placeholder='Amount due' />
            <input type="number" id="remainingAmt" value={remainingAmt} onChange={e => setRemaining(e.target.value)} placeholder='Remaining amount' />
            <input type="number" id="totalAmt" value={totalAmount} onChange={e => setTotalAmount(e.target.value)} placeholder='Total amount' />
            <input type="date" id="dateDue" value={dueDate} onChange={e => setDateDue(e.target.value)} />
            <DropDown companies={companies} selectCompanyId={setCompanyId} companyId={companyId} />
            {
                loan ?
                <label htmlFor="chckIsActive">IsActive
                    <input type="checkbox" name="chckIsActive" checked={isActive} onChange={e => setIsActive(e.target.value)} />
                </label>

                :
                null
            }
            <button type="submit" className='btn'>{ loan ? 'Update' : 'Add' }</button>
        </form>
    )
}
