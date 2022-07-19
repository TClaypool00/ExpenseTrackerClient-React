const DisplayBills = ({ bills }) => {
    if (bills.length > 0) {
        bills.map((bill) => {
            return (
                <div key={bill.billId}>
                    <p>Nickname: {bill.billName}</p>
                    <p>Amount: {bill.amountDue}</p>
                    <p>Company: {bill.companyName}</p>
                    <p>Due date: {bill.dateDue}</p>
                    <label>
                        Paid?
                        <input type="checkbox" checked={bill.isPaid} />
                    </label>
                </div>
            )
        })
    } else {
        return <p>No bills</p>
    }
}

export default DisplayBills