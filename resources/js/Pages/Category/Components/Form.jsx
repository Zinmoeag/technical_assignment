import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import DragAndDrop from "@/Components/DragAndDrop";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import InputError from "@/Components/InputError";


const Form = ({prevData, action}) => {

    const initailState = prevData ? {
        category_name: prevData.category_name,
        photo: null,
        status: prevData.status,
    }: {
        category_name: '',
        photo: '',
        status: false,
    }

    const { 
        data,
        setData,
        errors,
        reset,
        setError,
        post,
        processing,  
    } = useForm({
        ...initailState
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        post(action)
    }   

    return (
        <>
        <section className="w-[30rem]">
            <form 
            className="w-full"
            onSubmit = {handleSubmit}
            >
                <div className="my-4">
                    <InputLabel>
                        Category
                    </InputLabel>
                    <TextInput
                    value = {data.category_name}
                    onChange = {(e) => setData('category_name', e.target.value)}
                    label='Category'
                    className='w-full'
                    placeholder = 'Enter Category'
                    />
                    <InputError
                    message={errors.category_name}
                    ></InputError>
                </div>

                <div>
                    <h3 className="font-bold">Category Photo</h3>
                    <p className="text-slate-400 text-sm">Recommended Size 400px 200px</p>
                    <DragAndDrop
                        setData={setData}
                        setError={setError}
                        preValue ={prevData ? prevData.photo : null}
                        name = "photo"
                    />
                    <InputError
                    message={errors.photo}
                    ></InputError>
                </div>

                <div className="my-4">
                    <InputLabel>
                        Status
                    </InputLabel>
                    <div className="flex gap-2 items-center">
                    <input
                    type="checkbox"
                    id="dd"
                    checked={data.status}
                    onChange={(e) => setData('status', !data.status)}
                    />

                    <p>Publish</p>
                </div>
                    <InputError
                    message={errors.status}
                    ></InputError>
                </div>

                <div className="flex justify-end">
                    <div className="flex gap-2">
                        <PrimaryButton
                        onClick={() => reset()}
                        type='button'
                        className="bg-slate-800 text-white border-b-2 border-slate-400"
                        >
                            Cancel
                        </PrimaryButton>
                        <PrimaryButton
                        >
                            Submit
                        </PrimaryButton>
                    </div>
                </div>


            </form>
        </section>
        </>
    )
}
export default Form;