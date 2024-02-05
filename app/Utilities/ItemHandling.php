<?php

namespace App\Utilities;

use App\Models\Item;

class ItemHandling
{
    public function imageStore($imageData)
    {
        return $imageData->store("item", "public");
    }

    public function store($request)
    {
        Item::create([
            'name' => $request->name,
            'description' => $request->description,
            'category_id' => $request->category,
            'price' => $request->price,
            'item_condition' => $request->item_condition,
            'item_type' => $request->item_type,
            'status' => $request->status,
            'photo' => $this->imageStore($request->photo),
            'owner_id' => 1,
        ]);
    }

    public function update($request, $category)
    {
        $category->category_name = $request->category_name;
        $category->status = $request->status;

        if($request->photo){
            $category->photo = $this->imageStore($request->photo);
        }

        $category->save();
    }
}