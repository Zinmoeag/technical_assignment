import PanelLayout from "@/Layouts/PanelLayout";
import QuickRoute from "@/Components/QuickRoute";
import Form from "./Components/Form";


const Edit = ({routes, category}) => {

    return (
        <>
            <PanelLayout>
                <div>

                    <QuickRoute
                    routes = {routes} 
                    />

                    <Form
                    prevData = {category}
                    action = {route('category.update', {id : category.id})}
                    />
                </div>
            </PanelLayout>
        </>
    )
}

export default Edit;