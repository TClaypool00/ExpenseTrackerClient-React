import { useState, useRef, useEffect } from 'react';
import DropDown from '../../components/companies/DropDown';
import { companyDropDown, get, create } from '../../API';
import { getErrorMessage, getSuccessMessage, textFadeOut } from '../../helpers/helpers';

function BillForm( { billId } ) {
    const [bill, setBill] = useState({});
    const [companyId, setCompanyId] = useState('');
    const [companies, setComapnies] = useState([]);
    const [billName, setBillName] = useState('');
    const [amountDue, setAmount] = useState(0);
    const [dateDue, setDate] = useState('');

    useEffect(() => {
        const error = document.getElementById('error');

        if (billId) {
            get('bills', billId)
                .then(res => {
                    setBill(res.data);
                    setComapnies(res.data.company);
                })
                .catch(err => {
                    error.innerHTML = getErrorMessage(err);
                    textFadeOut(err);
                })

        } else {
            companyDropDown()
                .then(resp => {
                    setComapnies(resp.data);
                })
        }
    }, [])

    const form = useRef(null);

    return (
        <>
            <form method="post" ref={form} >
                <input type="text" id='txtBillName' value={billId ? bill.billName : ''} onChange={e => setBillName(e.target.value)} placeholder='Nickname' />
                <input type="number" id='amountDue' value={billId ? bill.amountDue : ''} onChange={e => setAmount(e.target.value)} placeholder='Amount due' />
                <input type="date" id="dateDue" onChange={e => setDate(e.target.value)} />
                <DropDown companies={companies} selectCompanyId={setCompanyId} companyId={companyId} />
                <button type="submit" className="btn">{ billId ? 'Update' : 'Add' }</button>
            </form>
        </>
    );
}

export default BillForm