const SelectInput = ({label, onChange, defaultSelected, options, error}) => {
    return (
        <>
            <div id='select' className="flex flex-col">
                <label htmlFor="selectOption" className="py-4">{label}</label>
                <select 
                id="selectOption" 
                className="border-2 border-slate-200 rounded-lg outline-none"
                onChange={e => onChange(e.target.value)}
                >
                    <option value={null} className="" disabled selected>
                            {defaultSelected}
                    </option>
                    {options.map(option => (
                        <option value={option.value} className="" key={`${option.value} ${option.id}`}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <p className="text-red-500">{error && error}</p>
            </div>
        </>
    )
}

export default SelectInput;