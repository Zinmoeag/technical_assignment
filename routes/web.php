<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return to_route('item');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->group(function () {

    Route::prefix('category')->group(function () {
        Route::get('/', [CategoryController::class, 'index'])->name('category');
        Route::get('/create', [CategoryController::class, 'create'])->name('category.create');
        Route::get('/edit/{category}', [CategoryController::class, 'edit'])->name('category.edit');
        Route::post('/edit/{category}', [CategoryController::class, 'update'])->name('category.update');
        Route::post('/create', [CategoryController::class, 'store'])->name('category.store');
        Route::put('/editStatus/category/{category}', [CategoryController::class, 'updateStatus'])->name('category.edit.status');
        Route::delete('/destroy/{category}', [CategoryController::class, 'destroy'])->name('category.destroy');
    });

    Route::prefix('item')->group(function () {
        Route::get('/', [ItemController::class, 'index'])->name('item');
        Route::get('/create', [ItemController::class, 'create'])->name('item.create');
        Route::post('/create', [ItemController::class, 'store'])->name('item.store');
        Route::get('/edit/{item}', [ItemController::class, 'edit'])->name('item.edit');
        Route::get('/edit/{item}/owner', [ItemController::class, 'editOwner'])->name('item.edit.owner');
        Route::post('/edit/{item}', [ItemController::class, 'update'])->name('item.update');
        Route::post('/edit/{item}/owner', [ItemController::class, 'updateOwner'])->name('item.update.owner');
        Route::put('/editStatus/{item}', [ItemController::class, 'updateStatus'])->name('item.edit.status');
        Route::delete('/destroy/{item}', [ItemController::class, 'delete'])->name('item.destroy');
    });
});


require __DIR__.'/auth.php';
