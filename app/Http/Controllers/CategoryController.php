<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use App\Http\Requests\CategoryRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Utilities\ImageResize;
use App\Utilities\CategoryHandling;


class CategoryController extends Controller
{
    private $imageResize;
    private $categoryHandling;

    public function __construct()
    {
        $this->imageResize = new ImageResize(400,200);
        $this->categoryHandling = new CategoryHandling();
    }

    public function index()
    {
        $order = request('order_column') &&request('order_by') 
        ? ['order_column' => request('order_column'), 'order_by' => request('order_by')]
        : null;

        return Inertia::render('Category/Index', [
            'routes' => [
                ["route" => route('category'), 'show' => 'Category'],
            ],
            'categories' => Category::getByOrder($order)->paginate(5)->withQueryString(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Category/Create',[
            'routes' => [
                ["route" => route('category'), 'show' => 'Category'],
                ['route' => route('category.create') , 'show' => 'Create'],
            ],
        ]);
    }

    public function edit(Category $category)
    {
        return Inertia::render('Category/Edit', [
            'routes' => [
                ["route" => route('category'), 'show' => 'Category'],
                ['route' => route('category.edit',['category' => $category->id]) , 'show' => 'Edit'],
                ['route' => route('category.edit',['category' => $category->id]), 'show' => $category->id],
            ],
            'category' => $category,
        ]);
    }

    public function store(CategoryRequest $request)
    {
        $this->categoryHandling->store($request);

        return to_route('category');
    }


    public function update(CategoryUpdateRequest $request, Category $category)
    {
        $this->categoryHandling->update($request, $category);

        return to_route('category');
    }

    public function updateStatus(Category $category)
    {
        $category->update([
            'status' => !$category->status 
        ]);
    }

    public function destroy(Category $category)
    {
        $category->delete(); 
    }
}
