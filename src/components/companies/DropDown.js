function DropDown({ companies }) {
    return (
        <select id="companyDropDown">
            {companies.map((company, i) => (
                <option key={i} value={company.companyId}>{company.companyName}</option>
            ))}
        </select>
    )
}

export default DropDown