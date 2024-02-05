import Linkbtn from "@/Components/LinkBtn";
import PrimaryButton from "@/Components/PrimaryButton";
import PanelLayout from "@/Layouts/PanelLayout";
import Table from "@/Components/Table";
import Pagination from "@/Components/Pagination";
import QuickRoute from "@/Components/QuickRoute";
import { makeTable } from "@/Utilities";



const Index = ({categories,routes}) => {

    const {header, data} = makeTable(categories.data, [
        {header : 'Name', acessor : 'category_name', canSortable : true},
        {header : 'Id', acessor : 'id', canSortable : true},
        {header : 'Publish', acessor : 'status', canSortable : true},
    ])

    return (
        <>
        <PanelLayout>
            <section className="flex flex-col gap-2">

                <QuickRoute
                routes = {routes}
                />

                <div className="flex items-center justify-end py-8 text-sm">
                    <Linkbtn route={route('category.create')}>
                        + Add Category
                    </Linkbtn>
                </div>
                <div>
                    <Table
                    header={header}
                    data={data}
                    page='category'
                    />
                    <Pagination
                    page = {categories}
                    />
                    
                </div>
            </section>
        </PanelLayout>
        </>
    )
}

export default Index;