import { useState, useEffect } from "react";
import { getEverything } from '../API';
import DisplayBills from "../components/bills/DisplayBills";

function Home() {
    const error = document.getElementById('error');
    const [bills, setBills] = useState([]);
    const [loans, setLoans] = useState({});
    const [subs, setSubs] = useState({})
    const [miscs, setMiscs] = useState({});
    
    useEffect(() => {
        getEverything()
            .then(resp => {
                setBills(resp.data[0]);
                setLoans(resp.data[1]);
                setSubs(resp.data[2]);
                console.log(resp.data)
                
        })
        .catch(err => {
            error.innerHTML = err.response.data.message;
        })
    }, [])

    return (
        <>
            <h2>Expense Tracker</h2>
            <h3>Bills</h3>
            <DisplayBills bills={bills} />
        </>
    )
}

export default Home