<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_name',
        'status',
        'photo'
    ];

    public function scopeGetByOrder($query, $order)
    {
        $query->when($order ?? false, function($query, $order){
            $query->orderBy($order['order_column'], $order['order_by']);
        });
    }

    public function getPhotoAttribute($value)
    {
        return $value ? env('APP_URL')."/storage/$value" : null;
    }
}
