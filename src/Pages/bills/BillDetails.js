import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../../components/bills/Details';
import BillForm from '../../components/bills/BillForm';

function BillDetails() {
    const params = useParams();

    function changeEdit() {
        if (isEdit) {
            form.current.getElementsByTagName('input')[0].innerHTML = bill.billName;
            setEdit(false);
        } else {
            setEdit(true);
        }
    }

    function update() {
        console.log('Updated');
    }

    return (
        <>
            <h2>{bill.billName}</h2>
            
            <button className="btn" onClick={changeEdit}>{ isEdit ? 'View' : 'Edit' }</button>

            { isEdit ? <BillForm billId={params.id} /> : <BillDetails /> }
        </>
    )
}

export default BillDetails