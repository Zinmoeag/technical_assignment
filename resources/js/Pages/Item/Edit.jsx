import QuickRoute from "@/Components/QuickRoute";
import PanelLayout from "@/Layouts/PanelLayout";
import ItemUpdateForm from "./Components/ItemUpdateForm";


const Edit = ({routes,categories,item_condition, item_type, prevData}) => {

    return (
        <PanelLayout>

            <QuickRoute
            routes={routes}
            />
            <div className="bg-blue-200 px-4 py-2 rounded-lg my-4">
                <h3>
                    Edit Item
                </h3>
            </div>

            <div className="w-[30rem]">
                <ItemUpdateForm
                action={route('item.update', {id: prevData.id})}
                prevData={prevData}
                options = {{
                    categories,
                    item_type, 
                    item_condition
                }}
                />
            </div>
        </PanelLayout>
    );
}

export default Edit;