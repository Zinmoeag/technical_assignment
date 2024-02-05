<?php

namespace App\Utilities;

use App\Models\Item;
use App\Models\Category;


class ItemUtilities
{
    public $item_type = [
        ['id' => 1, 'name' => 'Buy' , 'value' => 'buy'],
        ['id' => 2, 'name' => 'Sell' , 'value' => 'sell'],
        ['id' => 1, 'name' => 'Exchange' , 'value' => 'exchange'],
    ];

    public $item_condition = [
        ['id' => 1, 'name' => 'New' , 'value' => 'new'],
        ['id' => 2, 'name' => 'Good Second Hand' , 'value' => 'good_second_hand'],
    ];

    private $dropDownMaker;

    public function __construct()
    {
        $this->dropDownMaker = new DropDownData;
    }

    public function imageStore($imageData)
    {
        return $imageData->store("item", "public");
    }

    public function store($request, $ownerId)
    {
        Item::create([
            'name' => $request->name,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'item_condition' => $request->item_condition,
            'item_type' => $request->item_type,
            'status' => $request->status,
            'photo' => $this->imageStore($request->photo),
            'owner_id' => $ownerId,
        ]);
    }

    public function getDropDownData ()
    {
        return [
            'categories' => $this->dropDownMaker
            ->make(
                Category::where('status', true)->get(), 
                'category_name', 
                'id'
            ),
            'item_type' => $this->item_type,
            'item_condition' => $this->item_condition,
        ];
    }

    public function getPreviousFormData($item)
    {
        $item =  $item->load('owner');
        
        return [
            'id' => $item->id,
            'name' => $item->name,
            'description'  => $item->description,
            'category_id'  => $item->category_id,
            'price'  => $item->price,
            'photo' => $item->photo,
            'item_condition'  => $item->item_condition,
            'item_type'  => $item->item_type,
            'status'  => $item->status,
            'owner_name'  => $item->owner->owner_name,
            'owner_phone'  =>  $item->owner->owner_phone,
            'owner_address' =>  $item->owner->owner_address,
            'owner_location' =>  $item->owner->owner_location,
            
        ];        
    }

    public function update($request, $item)
    {
        $item->name = $request->name;
        $item->status = $request->status;
        $item->item_condition = $request->item_condition;
        $item->item_type = $request->item_type;
        $item->price = $request->price;
        $item->category_id = $request->category_id;

        if($request->photo){
            $item->photo = $this->imageStore($request->photo);
        }

        $item->save();
    }

    public function updateOwner($request, $item)
    {
        $owner = $item->owner;
        $owner->owner_name = $request->owner_name;
        $owner->owner_phone = $request->owner_phone;
        $owner->owner_address = $request->owner_address;

        if($location = $request->owner_location){
            $owner->owner_location = $location;
        }

        $owner->save();
    }

}