<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Constancia;

class RegisterConstanciaController extends Controller
{
    public function index()
    {
        return inertia::render('RegisterConstancias');
    }

    public function store(Request $request)
    {
        //dd($request);
        sleep(1);
        $files = $request->validate([
            'constancia_id' => ['required'],
            'user_id' => ['required'],
            'numero_descargas' => 'nullable|integer',
            'dems_id' => ['required'],
            'f_direccion' => ['required'],
            'f_coordinacion' => ['required'],
            'f_4ano' => ['required'],
            'f_extra' => ['required'],
            'foja' => ['required'],
            'libroMA' => ['required'],
            'f_3partida' => ['required'],
            'contenido_1' => ['required'],
            'unidad_academica' => ['required'],
            'correo_electronico' => ['required'],
            'nombre_docente' => ['required'],
            'contenido_constancia' => ['required'],
            'periodo' => ['required'],
            'fecha_elaboracion' => ['required'],
            'observaciones' => ['required'],
            'academia' => ['required'],
            'fecha_envio' => ['required'],
            'validacion' => ['required'],
            'factor_esdeped' => ['required'],
            'concepto_esdeped' => ['required'],
        ]);
        //dd($files);
        $data = Constancia::create($files);
        dd($data);
        return redirect('/registerconstancias');
    }
}
