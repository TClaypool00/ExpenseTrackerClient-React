import BillForm from '../../components/bills/BillForm';
import { useEffect } from 'react'
import { title } from '../../helpers/helpers';

function Add() { 
    useEffect(() => {
        document.title = title + 'Add a bill';
    })
    
    return (
        <>
            <h2>Add a bill</h2>
            <BillForm />
        </>
    )
}

export default Add