import React, { useState, useEffect, useRef } from 'react'
import { companyDropDown, create } from '../../API';
import { getUserId, tokenExpired } from '../../helpers/Auth';
import DropDown from '../../components/companies/DropDown';
import { SubscriptionModel } from '../../models/SubscriptionModel';
import { getSuccessMessage, getErrorMessage, textFadeOut } from '../../helpers/helpers';
import { useNavigate } from 'react-router-dom';

function AddSub() {
    const [subName, setSubName] = useState('');
    const [amount, setAmount] = useState(0);
    const [dateDue, setDateDue] = useState('');
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

    function addSub(e) {
        e.preventDefault();
        let subNameTxt = form.current.getElementsByTagName('input')[0];
        create('subscriptions', new SubscriptionModel(subName, amount, companyId, dateDue, getUserId()))
            .then(resp => {
                success.innerHTML = getSuccessMessage(resp);
                if (window.confirm('Would you like to add another subscription?')) {
                    e.target.reset();
                    subNameTxt.focus();
                    textFadeOut(success);
                } else {
                    nav('/');
                }
            })
            .catch(err => {
                errorMessage.innerHTML = getErrorMessage(err);
                subNameTxt.focus();
            })
    }

    return (
        <>
            <h2>Add a subscription</h2>
            <form method="post" onSubmit={addSub} ref={form}>
                <input type="text" id='txtSubName' onChange={e => setSubName(e.target.value)} placeholder='Nickname' />
                <input type="number" id='amountDue' onChange={e => setAmount(e.target.value)} placeholder='Amount due' />
                <input type="date" id="dateDue" onChange={e => setDateDue(e.target.value)} />
                <DropDown companies={companies} selectCompanyId={setCompanyId} />
                <button className="btn">Add</button>
            </form>
        </>
    )
}

export default AddSub