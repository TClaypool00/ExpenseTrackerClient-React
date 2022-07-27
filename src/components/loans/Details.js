function Details({ loan }) {
    return (
        <>
            <p>Nickname: {loan.name}</p>
            <p>Monthly amount due: {loan.monthlyAmountDue}</p>
            <p>Total amount: {loan.totalAmountDue}</p>
            <p>Remaining amount: {loan.remainingAmount}</p>
            <p>Active? {loan.isActive}</p>
            <p>Company: {loan.companyName}</p>
        </>
    )
}

export default Details
