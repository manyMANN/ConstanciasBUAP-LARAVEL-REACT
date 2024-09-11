<?php

use App\Http\Controllers\HomeUserController;
use App\Http\Controllers\HomeAdminController;
use App\Http\Controllers\HomeSuperAdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegistrarConstanciasController;

Route::get('/', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'authenticate']);
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
Route::resource('/register', RegisterController::class);
Route::get('/registrarconstancias', [RegistrarConstanciasController::class])->name('registrarconstancias');

Route::middleware(['auth', 'isSuperAdmin'])->group(function () {
    Route::get('/homesuperadmin', [HomeSuperAdminController::class, 'homesuperadmin'])->name('homesuperadmin');
});

Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/homeadmin', [HomeAdminController::class, 'homeadmin'])->name('homeadmin');
});

Route::middleware(['auth', 'isUser'])->group(function () {
    Route::get('/homeuser', [HomeUserController::class, 'homeuser'])->name('homeuser');
});
