import { useState, useEffect } from "react";
import { getEverything } from '../API';

function Home() {
    const error = document.getElementById('error');
    const [all, setAll] = useState({})
    
    useEffect(() => {
        getEverything()
            .then(resp => {
                setAll(resp.data[0]);
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

        </>
    )
}

export default Home