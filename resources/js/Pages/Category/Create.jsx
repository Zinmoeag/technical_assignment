import QuickRoute from "@/Components/QuickRoute";
import PanelLayout from "@/Layouts/PanelLayout";
import { Link } from "@inertiajs/react";
import Form from "./Components/Form";

const Create = ({routes}) => {
    return (
        <>
            <PanelLayout>
                <div>
                    <QuickRoute
                    routes = {routes} 
                    />
                    <div className="bg-blue-200 px-4 py-2 rounded-lg my-4">
                        <h3>
                            Add Category
                        </h3>
                    </div>
                    
                    <Form
                    action={route('category.store')}
                    />
                </div>
            </PanelLayout>
        </>
    )
}

export default Create;