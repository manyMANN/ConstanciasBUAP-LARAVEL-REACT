<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class HomeUsersController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('HomeUsers', [
            'users' => $users,
            'user' => Auth::user(),
        ]);
    }
}
