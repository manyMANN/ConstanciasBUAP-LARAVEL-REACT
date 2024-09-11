<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class HomeAdminController extends Controller
{
    public function index()
    {
        return Inertia::render('HomeAdmin');
    }
    public function homeadmin()
    {
        return Inertia::render('HomeAdmin', [
            'user' => Auth::user(),
        ]);
    }
}
