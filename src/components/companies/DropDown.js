function DropDown({ companies, selectCompanyId }) {
    return (
        <select id="companyDropDown" onChange={e => selectCompanyId(e.target.value)}>
            {companies.map((company, i) => (
                <option key={i} value={company.companyId}>{company.companyName}</option>
            ))}
        </select>
    )
}

export default DropDown