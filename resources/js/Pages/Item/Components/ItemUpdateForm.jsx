import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import DragAndDrop from "@/Components/DragAndDrop";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import SelectInput from "@/Components/SelectInput";
import TextEditor from "@/Components/TextEditor";
import 'react-phone-number-input/style.css'
import Linkbtn from "@/Components/LinkBtn";
import { showToast } from "@/Utilities";

const ItemUpdateForm = ({prevData, action, options}) => {
    
    const { 
        data,
        setData,
        errors,
        reset,
        setError,
        post,
        processing,  
    } = useForm({
       name : prevData.name,
       description : prevData.description,
       category_id : prevData.category_id,
       price : prevData.price,
       item_condition : prevData.item_condition,
       item_type : prevData.item_type,
       status : prevData.status,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post(action, {
            onSuccess : () => {
                showToast('Successfull Updated')
            }
        });
    }

    const getSelectedName = (value, menu) => {
        return menu.filter(m => m.value === value)[0]?.name;
    }

    return (
        <>
        <section className="flex-1 px-4">
            <form onSubmit={handleSubmit}>
                <div className="my-2">
                    <div className="my-2">
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

                    <InputLabel>
                        Name
                    </InputLabel>
                    <TextInput
                    value = {data.name}
                    onChange = {(e) => setData('name', e.target.value)}
                    label='Item Name'
                    className='w-full'
                    placeholder = 'Enter Category'
                    />
                    <InputError
                    message={errors.name}
                    ></InputError>
                </div>

                <div className="my-2">
                    <SelectInput
                    onChange={(value) => setData('category_id',value)}
                    defaultSelected={data.category_id ? getSelectedName(data.category_id, options.categories) :'Choose Category'}
                    options={options.categories}
                    label='Select Category'
                    />
                    <InputError
                    message={errors.category_id}
                    ></InputError>
                </div>

                <div className="my-2">
                    <InputLabel>
                        Price
                    </InputLabel>
                    <TextInput
                    value = {data.price}
                    onChange = {(e) => setData('price', e.target.value)}
                    label='Price'
                    className='w-full'
                    placeholder = 'Price'
                    />
                    <InputError
                    message={errors.price}
                    ></InputError>
                </div>

                <div className="my-2">
                    <SelectInput
                    onChange={(value) => setData('item_condition',value)}
                    defaultSelected={data.item_condition ? getSelectedName(data.item_condition, options.item_condition) :'Choose Item Condition'}
                    options={options.item_condition}
                    label='Select Item Condition'
                    />
                    <InputError
                    message={errors.item_condition}
                    ></InputError>
                </div>

                <div className="my-2">
                    <SelectInput
                    onChange={(value) => setData('item_type',value)}
                    defaultSelected={data.item_type ? getSelectedName(data.item_type, options.item_type) :'Choose Item Type'}
                    options={options.item_type}
                    label='Select Item Type'
                    />
                    <InputError
                    message={errors.item_type}
                    ></InputError>
                </div>

                <div>
                    <TextEditor
                    name='hello'
                    value={data.description}
                    label='Description'
                    setData={(value) =>setData('description',value)}
                    />
                    <InputError
                    message={errors.descrition}
                    ></InputError>
                </div>
                
                <div className="my-4">
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
                </div>
                <div className="flex gap-2">
                    <PrimaryButton
                    >
                        Update Item
                    </PrimaryButton>


                    <Linkbtn
                    className="bg-slate-900"
                    route={route('item.edit.owner',{id : prevData.id})}
                    >Update Owner
                    </Linkbtn>
                </div>
            </form>

        </section>
        </>
    )
}

export default ItemUpdateForm;