import { useEffect, useState } from 'react';
import { get } from '../../API';
import { useParams, useNavigate } from 'react-router-dom';
import SubscriptionForm from '../../components/subscriptions/SubscriptionForm';
import SubscriptionDetails from '../../components/subscriptions/SubscriptionDetails'
import { tokenExpired } from '../../helpers/Auth';
import { getErrorMessage, textFadeOut, title } from '../../helpers/helpers';

function SubDetails() {
    const params = useParams();
    const [sub, setSub] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const nav = useNavigate();

    function changeIsEdit() {
        if (isEdit) {
            setIsEdit(false);
        } else {
            setIsEdit(true);
        }
    }

    useEffect(() => {
        const error = document.getElementById('error');

        get('subscriptions', params.id)
            .then(resp => {
                setSub(resp.data);
                document.title = title + resp.data.name;
            })
            .catch(err => {                
                tokenExpired(err);
                error.innerHTML = getErrorMessage(err);
                textFadeOut(error);
                nav('/');
            })
    })

    return (
        <>
            <button className="btn" onClick={changeIsEdit}>{ isEdit ? 'View' : 'Edit' }</button>
            <h2>{sub.name}</h2>
            { isEdit ? <SubscriptionForm sub={sub} /> : <SubscriptionDetails sub={sub}  />}
        </>
    )
}

export default SubDetails