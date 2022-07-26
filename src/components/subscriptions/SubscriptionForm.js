import React, { useState, useEffect } from 'react'
import DropDown from '../../components/companies/DropDown';
import { companyDropDown, create, update } from '../../API';
import { SubscriptionModel } from '../../models/SubscriptionModel';
import { getSuccessMessage, getErrorMessage, textFadeOut } from '../../helpers/helpers';
import { tokenExpired } from '../../helpers/Auth';

function SubscriptionForm({ sub }) {
    const [subName, setSubName] = useState('');
    const [amount, setAmount] = useState('');
    const [dateDue, setDateDue] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [companies, setCompanies] = useState([]);
    const [isActive, setIsActive] = useState(true);

    const errorMessage = document.getElementById('error');
    const success = document.getElementById('success');
    const nav = useNavigate();

    useEffect(() => {
        const error = document.getElementById('error');
        if (sub) {
            setSubName(sub.name);
            setAmount(sub.amountDue);
            setDateDue(sub.dueDate);
            setCompanyId(sub.companyId);
            setCompanies(sub.companies);
            setIsActive(sub.isActive);
        } else {
            companyDropDown()
            .then(resp => {
                setCompanies(resp.data);
            }).catch(err => {
                tokenExpired(err);
                error.innerHTML = getErrorMessage(err);
                textFadeOut(error);
            })
        }
        
    }, [])

    function formSub(e) {
        e.preventDefault();
        let subNameTxt = form.current.getElementsByTagName('input')[0];
        let subModel = new SubscriptionModel(subName, amount, companyId, dateDue, isActive)
        if (sub) {
            update('subscriptions', subModel, sub.subscriptionId)
                .then(resp => {
                    success.innerHTML = getSuccessMessage(resp);
                    textFadeOut(success);
                })
                .catch(err => {
                    errorMessage.innerHTML = getErrorMessage(err);
                    textFadeOut(errorMessage);
                })
        } else {
            create('subscriptions', subModel)
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
                tokenExpired(err);
                errorMessage.innerHTML = getErrorMessage(err);
                textFadeOut(errorMessage);
                subNameTxt.focus();
            })
        }
    }

    return (
        <form method="post" onSubmit={formSub}>
            <input type="text" id='txtSubName' value={subName} onChange={e => setSubName(e.target.value)} placeholder='Nickname' />
            <input type="number" id='amountDue' value={amount} onChange={e => setAmount(e.target.value)} placeholder='Amount due' />
            <input type="date" id="dateDue" value={dateDue} onChange={e => setDateDue(e.target.value)} />
            <label htmlFor="chckIsActive">
                <input type="checkbox" name="chckIsActive" onChange={e => setIsActive(e.target.value)} checked={isActive} />;
            </label>
            <DropDown companies={companies} selectCompanyId={setCompanyId} companyId={companyId} />
            <button className="btn">{sub ? 'Update' : 'Add'}</button>
        </form>
    )
}

export default SubscriptionForm