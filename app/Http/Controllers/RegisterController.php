<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia::render('Register');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
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

        event(new Registered($user));
        Auth::login($user);

        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $auth)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $auth)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $auth) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $auth)
    {
        //
    }
}
