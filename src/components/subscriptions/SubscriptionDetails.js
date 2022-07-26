import React from 'react'

function SubscriptionDetails({ sub }) {
    return (
        <>
            <p>Subscription name: {sub.name}</p>
            <p>Monthly amount due: {sub.amountDue}</p>
            <p>Next due date: {sub.dueDate}</p>
            <p>Active? {sub.isActive ? 'Yes' : 'No'}</p>
        </>
    )
}

export default SubscriptionDetails