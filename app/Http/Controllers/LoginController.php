<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function index()
    {
        return inertia::render('Login');
    }

    public function authenticate(Request $request): RedirectResponse
    {
        //dd($request);
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            $data = DB::table('users')->where('email', $credentials['email'])->first();
            if ($data->role == '1') { //Usuario
                return redirect()->intended('homeuser')->with([
                    'auth' => [
                        'name' => Auth::user()->name,
                        'role' => Auth::user()->role,
                        'email' => Auth::user()->email,
                    ]

                ]);
            } elseif ($data->role == '2') { //Admin
                return redirect()->intended('homeadmin')->with([
                    'auth' => [
                        'name' => Auth::user()->name,
                        'role' => Auth::user()->role,
                        'email' => Auth::user()->email,
                    ]
                ]);
            } elseif ($data->role == '3') { //SuperAdmin
                return redirect()->intended('homesuperadmin')->with([
                    'auth' => [
                        'name' => Auth::user()->name,
                        'role' => Auth::user()->role,
                        'email' => Auth::user()->email,
                    ]
                ]);
            }
        }
        return back()->with(['error', 'There was a problem processing your request.']);
        /*return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');*/
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
