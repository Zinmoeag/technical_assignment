<?php

namespace App\Utilities;

class DropDownData 
{

    public function make($collection, $key, $value)
    {
        return $collection->map(function ($item) use($key,$value) {
            return [
                'id' => $item->id,
                'name' => $item[$key],
                'value' => $item[$value],
            ];
        });
    }
}