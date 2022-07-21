function DisplayMisc({ miscs }) {
    if (miscs.length > 0) {
        return (
            <div id="miscs" className="expenses">
                {miscs.map(misc => (
                    <div key={misc.miscellaneousId}>
                        <p>{misc.name}</p>
                        <p>{misc.amount}</p>
                        <p>{misc.dateAdded}</p>
                    </div>
                ))}
            </div>
        )
    } else {
        return <p>No miscellaneous found</p>
    }    
}

export default DisplayMisc