import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PhoneInput from "react-phone-number-input";
import Map from "@/Components/Map";

const OwnerForm = ({data, setData, errors}) => {
    return (
        <>
        <div>
            <div className="my-2">
                <InputLabel>
                    Owner Name
                </InputLabel>
                <TextInput
                value = {data.owner_name}
                onChange = {(e) => setData('owner_name', e.target.value)}
                label='Item Name'
                className='w-full'
                placeholder = 'Enter Owner Name'
                />
                <InputError
                message={errors.owner_name}
                ></InputError>
            </div>

            <div className="my-2">
                <InputLabel>
                    Phone
                </InputLabel>
                <PhoneInput
                placeholder="Enter phone number"
                value={data.owner_phone}
                onChange={(value) => setData('owner_phone', value)}
                />
                <InputError
                message={errors.owner_phone}
                ></InputError>
            </div>

            <div className="my-2">
                <InputLabel
                >
                    Owner Address
                </InputLabel>
                <textarea
                 cols="50" 
                 rows="5"
                 placeholder="Enter Address"
                 value={data.owner_address}
                 onChange={e => setData('owner_address', e.target.value)}
                 ></textarea>
                <InputError
                message={errors.owner_address}
                ></InputError>
            </div>

            <div className="my-6 border-y-2 border-slate-200 py-4">
                <Map
                data={data}
                setData={setData}
                position ={data.owner_location}
                setPosition = {(location) => setData('owner_location', location)}
                />
                <InputError
                message={errors.owner_location}
                ></InputError>
            </div>
        </div>
        </>
    )
}   

export default OwnerForm;