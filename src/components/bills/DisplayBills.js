const DisplayBills = ({ bills }) => {
    if (bills.length > 0) {
        return (
            <div id="bills" className="expenses">
                {bills.map(bill => (
                    <div key={bill.billId}>
                        <p>{bill.billName}</p>
                        <p>{bill.amountDue}</p>
                        <label htmlFor={"billIsPaid" + bill.billId}>Is paid? </label>
                        <input type="checkbox" name={"billIsPaid" + bill.billId} checked={bill.isPaid} readOnly />

                        <label htmlFor={"billIsLate" + bill.billId}>Is late? </label>
                        <input type="checkbox" name={"billIsLate" + bill.billId} checked={bill.isLate} readOnly />

                        <button>Pay</button>
                    </div>
                ))}
            </div>
        )
    } else {
        return <p>No bills</p>
    }
}

export default DisplayBills