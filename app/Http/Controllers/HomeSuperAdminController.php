<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class HomeSuperAdminController extends Controller
{
    public function index()
    {
        return Inertia::render('HomeSuperAdmin');
    }
    public function homesuperadmin()
    {
        return Inertia::render('HomeSuperAdmin', [
            'user' => Auth::user(),
        ]);
    }
}
