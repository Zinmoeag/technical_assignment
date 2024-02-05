
import { useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";
import PanelLayout from "@/Layouts/PanelLayout";
import QuickRoute from "@/Components/QuickRoute";
import OwnerForm from "./Components/OwnerFormUi";
import PrimaryButton from "@/Components/PrimaryButton";
import { showToast } from "@/Utilities";



const EditOwner = ({prevData, routes, item}) =>{
    const { 
        data,
        setData,
        errors,
        reset,
        setError,
        post,
        processing,  
    } = useForm({
       owner_name : prevData.owner_name,
       owner_phone: prevData.owner_phone,
       owner_address : prevData.owner_address,
       owner_location : prevData.owner_location && JSON.parse(prevData.owner_location),
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('item.edit.owner',{id:item}), {
            onSuccess : () => {
                showToast('Successfully updated Owner Infomation')
            }
        })
    }

    return (
        <>
        <PanelLayout>
            <QuickRoute
            routes={routes}
            />
            <div className="bg-blue-200 px-4 py-2 rounded-lg my-4">
                <h3>
                    Edit Item
                </h3>
            </div>
            <section className="flex-1 px-4 w-[30rem]">
                <form onSubmit={handleSubmit}>
                    <OwnerForm
                    data={data}
                    setData={setData}
                    errors={errors}
                    />
                    <PrimaryButton>
                        Submit
                    </PrimaryButton>
                </form>
            </section>
        </PanelLayout>
        </>
    )
}
export default EditOwner;