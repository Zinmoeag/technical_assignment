const CheckboxInput = (props) => {
    return (
        <div>
            <InputLabel>
                Status
            </InputLabel>
            <div className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    checked={data.status}
                    onChange={(e) => setData('status', !data.status)}
                />
                <p>Publish</p>
                <InputError
                message={errors.status}
                ></InputError>
            </div>
        </div>
    )
}

export default CheckboxInput;