import LoanForm from "../../components/loans/LoanForm";
import { useEffect } from 'react';
import { title } from '../../helpers/helpers';

function AddLoan() {
    useEffect(() => {
        document.title = title + 'Add a loan';
    })

    return (
        <>
            <h2>Add a loan</h2>
            <LoanForm />
            
        </>
    )
}

export default AddLoan