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
        $admin_id = Auth::user()->user_id;
        $users = User::where('admin_id', $admin_id)->get();
        //$users = User::all();
        return Inertia::render('HomeUsers', [
            'users' => $users,
            'user' => Auth::user(),
        ]);
    }
}
