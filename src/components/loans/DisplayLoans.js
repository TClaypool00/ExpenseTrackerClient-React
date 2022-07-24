const DisplayLoans = ({ loans }) => {
    if (loans.length > 0) {
        return (
            <div id="loans" className="expenses">
                {loans.map(loan => (
                    <div key={loan.loanId}>
                        <p>{loan.loanName}</p>
                        <p>{loan.monthlyAmountDue}</p>
                        
                        <label htmlFor={"loanIsPaid" + loan.loanId}>Is paid? </label>
                        <input type="checkbox" name={"loanIsPaid" + loan.loanId} checked={loan.isPaid} readOnly />

                        <label htmlFor={"loanIsLate" + loan.loanIdd}>Is late? </label>
                        <input type="checkbox" name={"loanIsLate" + loan.loanId} checked={loan.isLate} readOnly />

                        <a href={'/loans/' + loan.loanId}>Details</a>
                        <button>Pay</button>
                    </div>
                ))}
            </div>
        )
    } else {
        <p>No loans</p>
    }
}

export default DisplayLoans