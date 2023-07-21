const AppRadioButton = ({ label, value, checked, onChange, id, name }) => {
    return (
        <div className="gap-2 cursor-pointer">
            <input id={id} name={name} type="radio" value={value} checked={checked} onChange={onChange} />
            <label className="text-sm ml-2 text-gray-700" htmlFor={id}>{label}</label>
        </div>
    )
}

export default AppRadioButton