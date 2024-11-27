<?php

namespace App\Http\Controllers;

use App\Models\Constancia;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class HomeConstanciasController extends Controller
{
    public function index()
    {
        $admin_id = Auth::user()->user_id;
        $constacias = Constancia::where('admin_id', $admin_id)->get();
        //$constacias = Constancia::all();
        return Inertia::render('HomeConstancias', [
            'constancias' => $constacias,
            'user' => Auth::user(),
        ]);
    }
}
