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
        return inertia::render('RegisterConstancias', [
            'user' => Auth::user()
        ]);
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

    public function edit($constancia_id)
    {
        $constancia = Constancia::findOrFail($constancia_id);
        return Inertia::render('EditConstancia', [
            'constancia' => $constancia,
        ]);
    }

    public function update(Request $request, $constancia_id)
    {

        $constancia = Constancia::findOrFail($constancia_id);

        $validatedData = $request->validate([
            'constancia_id' => ['required'],
            'user_id' => ['required'],
            'name' => ['required'],
            'email' => ['required'],
            'unidad_academica' => ['required'],
            'academia' => ['required'],
            'periodo' => ['required'],
            'dems_id' => ['nullable', 'string'],
            'f_direccion' => ['required'],
            'f_coordinacion' => ['required'],
            'f_4ano' => ['required'],
            'f_extra' => ['required'],
            'foja' => ['required'],
            'libroMA' => ['nullable', 'string'],
            'f_3partida' => ['required'],
            'contenido_1' => ['required'],
            'contenido_constancia' => ['required'],
            'fecha_elaboracion' => ['required'],
            'observaciones' => ['nullable', 'string'],
            'fecha_envio' => ['required'],
            'validacion' => ['required'],
            'factor_esdeped' => ['required'],
            'concepto_esdeped' => ['required'],
            'numero_descargas' => ['nullable', 'integer'],
        ]);
        $constancia->constancia_id = $validatedData['constancia_id'];
        $constancia->user_id = $validatedData['user_id'];
        $constancia->name = $validatedData['name'];
        $constancia->email = $validatedData['email'];
        $constancia->unidad_academica = $validatedData['unidad_academica'];
        $constancia->academia = $validatedData['academia'];
        $constancia->periodo = $validatedData['periodo'];
        $constancia->dems_id = $validatedData['dems_id'] ?? " ";
        $constancia->f_direccion = $validatedData['f_direccion'];
        $constancia->f_coordinacion = $validatedData['f_coordinacion'];
        $constancia->f_4ano = $validatedData['f_4ano'];
        $constancia->f_extra = $validatedData['f_extra'];
        $constancia->foja = $validatedData['foja'];
        $constancia->libroMA = $validatedData['libroMA'] ?? " ";
        $constancia->f_3partida = $validatedData['f_3partida'];
        $constancia->contenido_1 = $validatedData['contenido_1'];
        $constancia->contenido_constancia = $validatedData['contenido_constancia'];
        $constancia->fecha_elaboracion = $validatedData['fecha_elaboracion'];
        $constancia->observaciones = $validatedData['observaciones'] ?? " ";
        $constancia->fecha_envio = $validatedData['fecha_envio'];
        $constancia->validacion = $validatedData['validacion'];
        $constancia->factor_esdeped = $validatedData['factor_esdeped'];
        $constancia->concepto_esdeped = $validatedData['concepto_esdeped'];
        $constancia->numero_descargas = $validatedData['numero_descargas'] ?? 0;

        $constancia->save();

        return redirect('/homeregisterconstancias')->with('success', 'Constancia actualizada correctamente...');
    }

    public function destroy($constancia_id)
    {
        $constancia = Constancia::findOrFail($constancia_id);
        $constancia->delete();
        return redirect('/homeregisterconstancias')->with('success', 'Constancia eliminada correctamente...');
    }
}
