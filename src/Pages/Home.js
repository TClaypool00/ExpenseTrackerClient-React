import { useState, useEffect } from "react";
import { getEverything } from '../API';
import DisplayBills from "../components/bills/DisplayBills";
import DisplayLoans from "../components/loans/DisplayLoans";
import DisplaySubscriptions from "../components/subscriptions/DisplaySubscriptions";
import DisplayMisc from "../components/misc/DisplayMisc";
import { tokenExpired } from '../helpers/Auth';

function Home() {    
    const [bills, setBills] = useState([]);
    const [loans, setLoans] = useState({});
    const [subs, setSubs] = useState({})
    const [miscs, setMiscs] = useState({});
    
    useEffect(() => {
        const error = document.getElementById('error');

        getEverything()
            .then(resp => {
                setBills(resp.data[0]);
                setLoans(resp.data[1]);
                setSubs(resp.data[2]);
                setMiscs(resp.data[3]);
                
        })
        .catch(err => {
            tokenExpired(err);
            error.innerHTML = err.response.data.message;            
        })
    }, [])

    return (
        <>
            <h2>Expense Tracker</h2>
            <h3>Bills</h3>
            <DisplayBills bills={bills}  />
            <h3>Loans</h3>
            <DisplayLoans loans={loans} />
            <h3>Subscriptions</h3>
            <DisplaySubscriptions subs={subs} />
            <h3>Miscellaneous</h3>
            <DisplayMisc miscs={miscs} />
        </>
    )
}

export default Home