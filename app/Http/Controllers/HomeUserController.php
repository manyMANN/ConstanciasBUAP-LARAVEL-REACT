<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class HomeUserController extends Controller
{
    public function index()
    {
        return inertia::render('HomeUser');
    }
    public function homeuser()
    {
        return Inertia::render('HomeUser', [
            'user' => Auth::user(),
        ]);
    }
}
