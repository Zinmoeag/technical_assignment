<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $data = [
            [
                'category_name' => 'Pen',
                "photo" => 'category/item.png',
                'status' => 1
            ],
            [
                'category_name' => 'Paper',
                "photo" => 'category/item.png',
                'status' => 1
            ],
            [
                'category_name' => 'Card',
                "photo" => 'category/item.png',
                'status' => 1
            ],
            [
                'category_name' => 'NoteBook',
                "photo" => 'category/item.png',
                'status' => 0
            ],
            [
                'category_name' => 'Magazine',
                "photo" => 'category/item.png',
                'status' => 1
            ],
            [
                'category_name' => 'Book',
                "photo" => 'category/item.png',
                'status' => 1
            ],
            [
                'category_name' => 'Ruler',
                "photo" => 'category/item.png',
                'status' => 0
            ],
            [
                'category_name' => 'Watch',
                "photo" => 'category/item.png',
                'status' => 1
            ],
            [
                'category_name' => 'Notepad',
                "photo" => 'category/item.png',
                'status' => 0
            ],
            [
                'category_name' => 'Newspaper',
                "photo" => 'category/item.png',
                'status' => 1
            ],

        ];

        Category::insert($data);
    }
}
