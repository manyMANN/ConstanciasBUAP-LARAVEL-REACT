<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RegistrarConstanciasController extends Controller
{
    public function index()
    {
        return Inertia::render('RegistrarConstancias');
    }
    public function registrarconstancias()
    {
        return Inertia::render('RegistrarConstancias');
    }
}
