import React, { useState, useEffect, useRef } from 'react'
import { companyDropDown, create } from '../../API';
import { getUserId, tokenExpired } from '../../helpers/Auth';
import DropDown from '../../components/companies/DropDown';
import { BillModel } from '../../models/BillModel';
import { getSuccessMessage, getErrorMessage, textFadeOut } from '../../helpers/helpers';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [billName, setBillName] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
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

    function addBill(e) {
        e.preventDefault();
        let billNameTxt = form.current.getElementsByTagName('input')[0];
        create('bills', new BillModel(billName, amount, date, companyId))
            .then(resp => {
                success.innerHTML = getSuccessMessage(resp);
                if (window.confirm('Would you like to add another bill?')) {
                    e.target.reset();
                    billNameTxt.focus();
                    textFadeOut(success);
                } else {
                    nav('/');
                }
            })
            .catch(err => {
                errorMessage.innerHTML = getErrorMessage(err);
                billNameTxt.focus();
            })
    }

    return (
        <>
            <h2>Add a bill</h2>
            `<form method="post" onSubmit={addBill} ref={form} >
                <input type="text" id='txtBillName' onChange={e => setBillName(e.target.value)} placeholder='Nickname' />
                <input type="number" id='amountDue' onChange={e => setAmount(e.target.value)} placeholder='Amount due' />
                <input type="date" id="dateDue" onChange={e => setDate(e.target.value)} />
                <DropDown companies={companies} selectCompanyId={setCompanyId} />
                <button className="btn">Add</button>
            </form>`
        </>
    )
}

export default Add