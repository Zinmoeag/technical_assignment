import QuickRoute from "@/Components/QuickRoute";
import PanelLayout from "@/Layouts/PanelLayout";
import Form from "../Item/Components/Form";
import { Link } from "@inertiajs/react";

const Create = ({routes, categories, item_type, item_condition}) => {

    
    return (
        <>
        <PanelLayout>
            <QuickRoute
            routes={routes} 
            />
            <div className="bg-blue-200 px-4 py-2 rounded-lg my-4">
                <h3>
                    Add Item
                </h3>
            </div>

            { categories.length > 0 ? (  
                <Form
                action={route('item.store')}
                options = {{
                    categories,
                    item_type, 
                    item_condition
                }}
                />
            ) : (
                <div className="flex gap-2">
                    <p>There is no Category</p>
                    <Link
                    className="text-blue-400 hover:text-slate-400"
                    href={route('category')}
                    >
                        Create Categroy ?
                    </Link>
                </div>
            )}
        </PanelLayout>
        </>
    )
}

export default Create;