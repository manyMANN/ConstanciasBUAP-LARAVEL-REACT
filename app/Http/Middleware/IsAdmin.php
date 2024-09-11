<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::user()->role != '2') {
            if (Auth::user()->role == '3')
                return Redirect::route('homesuperadmin');
            elseif (Auth::user()->role == '1')
                return Redirect::route('homeuser');
            else
                return Redirect::route('login');
        }
        return $next($request);
    }
}
