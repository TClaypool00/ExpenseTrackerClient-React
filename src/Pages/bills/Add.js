import React from 'react'
import { useState, useEffect } from 'react'
import { companyDropDown } from '../../API';
import { tokenExpired } from '../../helpers/Auth';
import DropDown from '../../components/companies/DropDown';

function Add() {
    const [billName, setBillName] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
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
            <h2>Add a bill</h2>
            <form method="post">
                <input type="text" id='txtBillName' onChange={e => setBillName(e.target.value)} placeholder='Nickname' />
                <input type="number" id='amountDue' onChange={e => setAmount(e.target.value)} placeholder='Amount due' />
                <input type="date" id="dateDue" onChange={e => setDate(e.target.value)} />
                <DropDown companies={companies} />
                <button className="btn">Add</button>
            </form>
        </>
    )
}

export default Add