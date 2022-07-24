import React from 'react'

function Details({ bill }) {
    return (
        <>
            <p>Nickname: {bill.billName}</p>
            <p>Amount due: {bill.amountDue}</p>
            <p>Active: {bill.isActive ? 'Yes': 'No'}</p>
            <p>Company: {bill.companyName}</p>
            <p>Next due date: {bill.dateDue}</p>
        </>
    )
}

export default Details