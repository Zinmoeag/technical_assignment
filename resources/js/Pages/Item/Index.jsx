import QuickRoute from "@/Components/QuickRoute";
import PanelLayout from "@/Layouts/PanelLayout";
import Linkbtn from "@/Components/LinkBtn";
import { makeTable } from "@/Utilities";
import Table from "@/Components/Table";
import Pagination from "@/Components/Pagination";

const Index = ({items, routes}) =>{

    const modifiedStructrue = items.data.map((item) => {
        return {
            id : item['id'],
            name : item['name'],
            description : item['description'],
            owner : item.owner.owner_name,
            status : item['status'],
            price : item['price'],
            category : item?.category?.category_name,
        }
    })

    const {header, data} = makeTable(modifiedStructrue, [
        {header : 'Name', acessor : 'name', canSortable : true},
        {header : 'No', acessor : 'id', canSortable : true},
        {header : 'Category', acessor : 'category', canSortable : true},
        {header : 'Description', acessor : 'description'},
        {header : 'Owner', acessor : 'owner', canSortable : true},
        {header : 'Publish', acessor : 'status', canSortable : true},
        {header : 'Price', acessor : 'price', canSortable : true},
    ])
    
    return (
        <>
        <PanelLayout>
            <QuickRoute 
            routes={routes}
            />
            <div className="flex items-center justify-end py-8 text-sm">
                    <Linkbtn 
                    route={route('item.create')}
                    >
                        + Add Item
                    </Linkbtn>
                </div>
                <div>
                    <Table
                    header={header}
                    data={data}
                    page='item'
                    />
                    <Pagination
                    page = {items}
                    />                    
                </div>
        </PanelLayout>
        </>
    )
}

export default Index;
