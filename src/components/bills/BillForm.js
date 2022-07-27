import { useState, useEffect } from 'react';
import DropDown from '../../components/companies/DropDown';
import { companyDropDown, create, update } from '../../API';
import { getErrorMessage, getSuccessMessage, textFadeOut } from '../../helpers/helpers';
import { tokenExpired } from '../../helpers/Auth';
import { BillModel } from '../../models/BillModel';

function BillForm( { bill } ) {
    const [companyId, setCompanyId] = useState('');
    const [companies, setComapnies] = useState([]);
    const [billName, setBillName] = useState('');
    const [amountDue, setAmount] = useState('');
    const [isActive, setActive] = useState(false);
    const [dateDue, setDate] = useState('');
    const success = document.getElementById('success');
    const errorMessage = document.getElementById('error');

    useEffect(() => {
        const error = document.getElementById('error');

        if (!bill) {
            companyDropDown()
                .then(resp => {
                    setComapnies(resp.data);
                })
                .catch(err => {
                    tokenExpired(err);
                    error.innerHTML = getErrorMessage(err);
                    textFadeOut(error);                    
                })
        } else {
            setComapnies(bill.companies);
            setCompanyId(bill.companyId);
            setBillName(bill.billName)
            setAmount(bill.amountDue);
            setDate(bill.dateDue);
            setActive(bill.isActive);
        }
    }, []);

    function formSubmt(e) {
        e.preventDefault();

        const billModel = new BillModel(billName, amountDue, dateDue, companyId, isActive);

        if (bill) {
            update('bills', billModel, bill.billId)
                .then(resp => {
                    success.innerHTML = getSuccessMessage(resp);
                    textFadeOut(success);
                })
                .catch(err => {
                    errorMessage.innerHTML = getErrorMessage(err);
                    textFadeOut(errorMessage);
                })
        } else {
            create('bills', billModel)
                .then(resp => {
                    success.innerHTML = getSuccessMessage(resp);
                    textFadeOut(success);
                })
                .catch(err => {
                    errorMessage.innerHTML = getErrorMessage(err);
                    textFadeOut(errorMessage);
                })
        }
    }

    return (
        <form method="post" onSubmit={formSubmt} >            
            <input type="text" id='txtBillName' value={billName}  onChange={e => setBillName(e.target.value)} placeholder='Nickname' />
            <input type="number" id='amountDue' value={amountDue}  onChange={e => setAmount(e.target.value)} placeholder='Amount due' />
            <input type="date" id="dateDue" value={dateDue} onChange={e => setDate(e.target.value)} />
            <DropDown companies={companies} selectCompanyId={setCompanyId} companyId={companyId} />
            <label htmlFor="chckIsActive">Active
                <input type="checkbox" name="chckIsActive" id="chckIsActive" onChange={e => setActive(e.target.value)} checked={isActive}/>
            </label>
            <button type="submit" className="btn">{ bill ? 'Update' : 'Add' }</button>
        </form>
    )
}

export default BillForm