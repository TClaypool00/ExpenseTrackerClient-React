import { useEffect, useState } from 'react'
import { get } from '../../API';
import { useParams, useNavigate } from 'react-router-dom'
import Details from '../../components/bills/Details';
import BillForm from '../../components/bills/BillForm';
import { tokenExpired } from '../../helpers/Auth';
import { getErrorMessage, textFadeOut, title } from '../../helpers/helpers';

function BillDetails() {
    const params = useParams();
    const [bill, setBill] = useState({});
    const [isEdit, setEdit] = useState(false);
    const nav = useNavigate();

    function changeEdit() {
        if (isEdit) {
            setEdit(false);
        } else {
            setEdit(true);
        }
    }

    useEffect(() => {
        const error = document.getElementById('error');

        get('bills', params.id)
            .then(resp => {
                setBill(resp.data);
                document.title = title + resp.data.billName

            })
            .catch(err => {
                tokenExpired(err);
                error.innerHTML = getErrorMessage(err);
                textFadeOut(error);
                nav('/');
            })
    }, []);

    return (
        <>
            <button className="btn" onClick={changeEdit}>{ isEdit ? 'View' : 'Edit' }</button>
            <h2>{bill.billName}</h2>

            { isEdit ? <BillForm bill={bill} /> : <Details bill={bill} /> }
        </>
    )
}

export default BillDetails