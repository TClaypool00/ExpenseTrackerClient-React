import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../../API';
import { tokenExpired } from '../../helpers/Auth';
import { textFadeOut, getErrorMessage, getSuccessMessage } from '../../helpers/helpers';

function BillDetails() {
    const [bill, setBill] = useState({});
    const params = useParams();

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
    })

    return (
        <div>BillDetails</div>
    )
}

export default BillDetails