<?php

use App\Http\Controllers\HomeUserController;
use App\Http\Controllers\HomeAdminController;
use App\Http\Controllers\HomeSuperAdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterAdminController;
use App\Http\Controllers\RegisterConstanciaController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\RegisterSuperAdminController;
use App\Http\Controllers\RegisterUserController;

Route::get('/', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'authenticate']);
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::resource('/register', RegisterController::class);
Route::get('/registerconstancias', [RegisterConstanciaController::class, 'index'])->name('registerconstancia');
Route::resource('/registerconstancias', RegisterConstanciaController::class);

Route::middleware(['auth', 'isSuperAdmin'])->group(function () {
    Route::get('/homesuperadmin', [HomeSuperAdminController::class, 'homesuperadmin'])->name('homesuperadmin');
    Route::get('/registeradmin', [RegisterAdminController::class, 'index'])->name('registeradmin');
    Route::resource('/registeradmin', RegisterAdminController::class);
    Route::get('/registersuperadmin', [RegisterSuperAdminController::class, 'index'])->name('registersuperadmin');
    Route::resource('/registersuperadmin', RegisterSuperAdminController::class);
});

Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/homeadmin', [HomeAdminController::class, 'homeadmin'])->name('homeadmin');
});

Route::middleware(['auth', 'isUser'])->group(function () {
    Route::get('/homeuser', [HomeUserController::class, 'homeuser'])->name('homeuser');
});

Route::middleware(['auth', 'CRUD'])->group(function () {
    Route::get('/registeruser', [RegisterUserController::class, 'index'])->name('registeruser');
    Route::resource('/registeruser', RegisterUserController::class);
});
