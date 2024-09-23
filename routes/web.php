<?php

use App\Http\Controllers\HomeAdminController;
use App\Http\Controllers\HomeConstanciasController;
use App\Http\Controllers\HomeSuperAdminController;
use App\Http\Controllers\HomeUserController;
use App\Http\Controllers\HomeUsersController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterAdminController;
use App\Http\Controllers\RegisterConstanciaController;
use App\Http\Controllers\RegisterConstanciasExcelController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\RegisterSuperAdminController;
use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\RegisterUsersExcelController;

Route::get('/', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'authenticate']);
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::resource('/register', RegisterController::class);
Route::get('/homeuser', [HomeUserController::class, 'index'])->name('homeuser');


Route::middleware(['auth', 'isSuperAdmin'])->group(function () {
    Route::get('/homesuperadmin', [HomeSuperAdminController::class, 'homesuperadmin'])->name('homesuperadmin');
    Route::get('/registersuperadmin', [RegisterSuperAdminController::class, 'index'])->name('registersuperadmin');
    Route::resource('/registersuperadmin', RegisterSuperAdminController::class);
    Route::get('/registeradmin', [RegisterAdminController::class, 'index'])->name('registeradmin');
    Route::resource('/registeradmin', RegisterAdminController::class);
});

Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/homeadmin', [HomeAdminController::class, 'homeadmin'])->name('homeadmin');
});

Route::middleware(['auth', 'isUser'])->group(function () {});

Route::middleware(['auth', 'CRUD'])->group(function () {
    //Routes for register Users
    Route::get('/homeregisterusers', [HomeUsersController::class, 'index'])->name('homeregisteruser');
    Route::get('/registerusersexcel', [RegisterUsersExcelController::class, 'index'])->name('registerusersexcel');
    Route::post('/registerusersexcelpost', [RegisterUsersExcelController::class, 'store']);
    Route::get('/registeruser', [RegisterUserController::class, 'index'])->name('registeruser');
    Route::resource('/registeruser', RegisterUserController::class);

    //Routes for register Certificates
    Route::get('/homeregisterconstancias', [HomeConstanciasController::class, 'index'])->name('homeregisterconstancias');
    Route::get('/registerconstancias', [RegisterConstanciaController::class, 'index'])->name('registerconstancia');
    Route::resource('/registerconstancias', RegisterConstanciaController::class);
    Route::get('/registerconstanciasexcel', [RegisterConstanciasExcelController::class, 'index'])->name('registerconstanciasexcel');
    Route::post('/registerconstanciasexcelpost', [RegisterConstanciasExcelController::class, 'store']);
});
