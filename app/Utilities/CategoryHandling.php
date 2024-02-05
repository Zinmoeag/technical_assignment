<?php

namespace App\Utilities;

use App\Models\Category;

class CategoryHandling
{
    public function imageStore($imageData)
    {
        return $imageData->store("category", "public");
    }

    public function store($request)
    {
        Category::create([
            'category_name' => $request->category_name,
            'status' => $request->status,
            'photo' => $this->imageStore($request->photo),
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