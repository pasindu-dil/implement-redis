<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); // Blade view containing the React app
})->where('any', '.*');

Route::get('/dashboard', [UserController::class, 'index'])->name('dashboard');
