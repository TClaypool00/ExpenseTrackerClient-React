import { Link } from 'react-router-dom'

function DisplaySubscriptions({ subs }) {
    if (subs.length > 0) {
        return (
            <div id="subs" className="expenses">
                {subs.map(sub => (
                    <div key={sub.subscriptionId}>
                        <p>{sub.subscriptionName}</p>
                        <p>{sub.amountDue}</p>

                        <label htmlFor={"subIsPaid" + sub.subscriptionId}>Is paid? </label>
                        <input type="checkbox" name={"subIsPaid" + sub.loanId} checked={sub.isPaid} readOnly />

                        <label htmlFor={"subIsLate" + sub.subscriptionId}>Is late? </label>
                        <input type="checkbox" name={"subIsLate" + sub.subscriptionId} checked={sub.isLate} readOnly />
                        <Link to={'/subscriptions/' + sub.subscriptionId}>Details</Link>
                        
                        <button>Pay</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplaySubscriptions