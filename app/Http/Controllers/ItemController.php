<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Item;
use App\Models\Category;
use App\Models\Owner;
use App\Utilities\DropDownData;
use App\Utilities\ItemUtilities;
use App\Http\Requests\ItemStoreRequest;
use App\Http\Requests\ItemUpdateRequest;
use App\Http\Requests\ItemOwnerUpdateRequest;

class ItemController extends Controller
{
    private $dropDownMaker;
    private $itemUtilities;
    public function __construct()
    {
        $this->dropDownMaker = new DropDownData; 
        $this->itemUtilities = new ItemUtilities;
    }

    public function index ()
    {
        $order = request('order_column') &&request('order_by') 
        ? ['order_column' => request('order_column'), 'order_by' => request('order_by')]
        : null;

        $items = Item::with(['category', 'owner'])->getByOrder($order)->paginate(5)->withQueryString();

        return Inertia::render('Item/Index',[
            'routes' => [
                ["route" => route('item'), 'show' => 'Item'],
            ],
            'items' => $items
        ]);
    }

    public function create ()
    {
        return Inertia::render('Item/Create',[
            'routes' => [
                ["route" => route('item'), 'show' => 'Item'],
                ["route" => route('item.create'), 'show' => 'Create'],
            ],
            ...$this->itemUtilities->getDropDownData(),
        ]);
    }

    public function updateStatus(Item $item)
    {
        $item->update([
            'status' => !$item->status 
        ]);
    }

    public function store(ItemStoreRequest $request)
    {
        $owner = Owner::create([
            'owner_name' => $request->owner_name,
            'owner_phone' => $request->owner_phone, 
            'owner_address' => $request->owner_address, 
        ]);

        if($location = $request->owner_location){
            $owner->owner_location = $location;
            $owner->save();
        }

        $this->itemUtilities->store($request, $owner->id);

        return to_route('item');
    }

    public function edit(Item $item)
    {
        return Inertia::render('Item/Edit',[
            'routes' => [
                ["route" => route('item'), 'show' => 'Item'],
                ['route' => route('item.edit',['item' => $item->id]) , 'show' => 'Edit'],
                ['route' => route('item.edit',['item' => $item->id]), 'show' => $item->id],
            ],
            ...$this->itemUtilities->getDropDownData(),
            'prevData' => $this->itemUtilities->getPreviousFormData($item)
        ]);
    }

    public function editOwner(Item $item)
    {
        return Inertia::render('Item/EditOwner',[
            'routes' => [
                ["route" => route('item'), 'show' => 'Item'],
                ['route' => route('item.edit',['item' => $item->id]) , 'show' => 'Edit'],
                ['route' => route('item.edit',['item' => $item->id]), 'show' => $item->id],
                ['route' => route('item.edit.owner',['item' => $item->id]), 'show' => 'Owner'],
            ],
            'prevData' => $this->itemUtilities->getPreviousFormData($item),
            "item" => $item->id,
        ]);
    }

    public function update(ItemUpdateRequest $request, Item $item)
    {
        $this->itemUtilities->update($request, $item);
    }
    
    public function updateOwner(ItemOwnerUpdateRequest $request, Item $item)
    {
        $this->itemUtilities->updateOwner($request, $item);
    }

    public function delete(Item $item)
    {
        $item->delete();
    }
}
