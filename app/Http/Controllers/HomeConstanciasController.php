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
        $constacias = Constancia::all();
        return Inertia::render('HomeConstancias', [
            'constancias' => $constacias,
            'user' => Auth::user(),
        ]);
    }
}
