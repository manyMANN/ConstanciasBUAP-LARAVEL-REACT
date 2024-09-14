<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class RegisterConstanciaController extends Controller
{
    public function index()
    {
        return inertia::render('RegisterConstancias');
    }
}
