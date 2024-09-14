<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class RegisterAdminController extends Controller
{
    public function index()
    {
        return inertia::render('RegisterAdmin', [
            'user' => Auth::user(),
        ]);
    }
    public function store(Request $request)
    {
        //
        //dd($request);
        sleep(1);
        $files = $request->validate([
            'user_id' => ['required'],
            'name' => ['required'],
            'email' => ['required'],
            'role' => ['required'],
            'password' => ['required'],
        ]);

        $user = User::create($files);

        return redirect('/homesuperadmin');
    }
}