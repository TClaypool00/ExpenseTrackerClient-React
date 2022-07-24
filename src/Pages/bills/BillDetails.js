import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../../API';
import { tokenExpired } from '../../helpers/Auth';
import { textFadeOut, getErrorMessage, getSuccessMessage } from '../../helpers/helpers';

function BillDetails() {
    const [bill, setBill] = useState({});
    const params = useParams();
    const [isEdit, setEdit] = useState(false);


    useEffect(() => {
        const error = document.getElementById('error');

        get('bills', params.id)
            .then(resp => {
                console.log(resp.data);
                setBill(resp.data);
            })
            .catch(err => {
                tokenExpired(err);
                error.innerHTML = getErrorMessage(err);
                textFadeOut(error);
            })
    }, [])

    return (
        <>
            <h2>{bill.billName}</h2>
            <label htmlFor="txtBillName">
                Nickname:
                <p>{bill.billName}</p>
            </label>
            <label htmlFor="numAmountDue">
                Amount due:
                <p>{bill.amountDue}</p>
            </label>
            
            <label htmlFor="chkIsActive">
                Active?
                <p>{bill.isActive ? 'Yes' : 'No'}</p>
            </label>

            <label htmlFor="company">
                Company
                <p>{bill.companyName}</p>
            </label>

            <label htmlFor="dueDate">
                Next due date
                <p>{bill.dateDue}</p>
            </label>
        </>
    )
}

export default BillDetails