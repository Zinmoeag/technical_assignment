<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Item;

class Owner extends Model
{
    use HasFactory;

    protected $fillable = [
        'owner_name',
        'owner_phone',
        'owner_address',
    ];

    public function item()
    {
        return $this->hasOne(Item::class);
    }


    public function getOwnerNameAttribute($value){
        return ucfirst($value);
    }
}
