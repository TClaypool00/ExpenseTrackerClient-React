import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Details  from '../../components/loans/Details';
import LoanForm from '../../components/loans/LoanForm';
import { get } from "../../API";
import { getErrorMessage, textFadeOut, title } from "../../helpers/helpers";
import { tokenExpired } from "../../helpers/Auth";

function LoanDetails() {
    const nav = useNavigate();
    const params = useParams();
    const [loan, setLoan] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        const error = document.getElementById('error');

        get('loans', params.id)
            .then(resp => {
                setLoan(resp.data);
                document.title = title + resp.data.loanName;
            })
            .catch(err => {
                tokenExpired(err);
                error.innerHTML = getErrorMessage(err);
                textFadeOut(error);
                nav('/');
            })
    })

    function changeIsEdit() {
        if (isEdit) {
            setIsEdit(false);
        } else {
            setIsEdit(true);
        }
    }

    return (
        <>
            <button onClick={changeIsEdit} className="btn">{isEdit ? 'View' : 'Edit'}</button>
            <h2>{loan.loanName}</h2>
            { isEdit ? <LoanForm loan={loan} /> : <Details loan={loan} /> }
        </>
    )
}

export default LoanDetails
