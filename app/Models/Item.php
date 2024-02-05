<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\Category;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'category_id',
        'price',
        'photo',
        'item_condition',
        'item_type',
        'status',
        'owner_id',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function owner()
    {
        return $this->belongsTo(Owner::class);
    }

    public function scopeGetByOrder($query, $order)
    {

        
        $query->when($order ?? false, function($query, $order)
        {
            $query = $query->when(in_array($order['order_column'], ['name' , 'price' , 'id' , 'status']) ?? false, function ($query) use($order) {
                $query->orderBy($order['order_column'], $order['order_by']);
            });

            $query = $query->when($order['order_column'] === 'category' ?? false, function ($query) use($order) {
                $query->orderBy(Category::select('category_name')
                    ->whereColumn('categories.id', 'items.category_id'), $order['order_by']
                );
            });

            $query = $query->when($order['order_column'] === 'owner' ?? false, function ($query) use($order){
                $query->orderBy(Owner::select('owner_name')
                    ->whereColumn('owners.id', 'items.owner_id'), $order['order_by']
                );
            });
        });

    }

    public function getPhotoAttribute($value)
    {
        return $value ? env('APP_URL')."/storage/$value" : null;
    }

    public function getNameAttribute($value){
        return ucfirst($value);
    }
}
