<?php

namespace App\Http\Controllers;

use App\Models\Pantilla;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class PlantillaController extends Controller
{
    public function index()
    {
        return Inertia::render('RegisterPlantilla');
    }
    public function store(Request $request)
    {
        //dd($request);
        // Validar que el archivo es una imagen

        // Guardar la imagen en la carpeta public/img
        if ($request->hasFile('image')) {
            $request->validate([
                'nombre_plantilla' => 'required|string|max:255',
                'font_size_nombre' => 'required',
                'font_size_texto' => 'required',
                'text_color_nombre' => 'required',
                'text_color_texto' => 'required',
                'longitud_nombre' => 'required',
                'latitud_nombre' => 'required',
                'longitud_texto' => 'required',
                'latitud_texto' => 'required',
                'image' => 'required|image|mimes:jpg,jpeg,png,gif,svg,webp|max:2048', // Valida las extensiones permitidas
            ]);
        }
        // Obtenemos la imagen
        $image = $request->file('image');
        //Generamos un nombre especifico con las extension original del archivo
        $imageName = $request['nombre_plantilla'] . '_' . time() . '.' . $image->getClientOriginalExtension();
        //Guardamos la imagen y obtenemos la direccion path
        $imagePath = $image->storeAs('img', $imageName, 'public');
        // Registrar el nombre y path de la imagen en la base de datos
        $plantilla = new Pantilla();
        $plantilla->nombre_plantilla = $request->input('nombre_plantilla');
        $plantilla->longitud_nombre = $request->input('longitud_nombre');
        $plantilla->latitud_nombre = $request->input('latitud_nombre');
        $plantilla->longitud_texto = $request->input('longitud_texto');
        $plantilla->latitud_texto = $request->input('latitud_texto');
        $plantilla->text_color_nombre = $request->input('text_color_nombre');
        $plantilla->text_color_texto = $request->input('text_color_texto');
        $plantilla->font_size_nombre = $request->input('font_size_nombre');
        $plantilla->font_size_texto = $request->input('font_size_texto');
        $plantilla->path_img = '/storage/' . $imagePath; // Ruta accesible públicamente
        $plantilla->save();

        return redirect('/homesuperadmin');
    }
}
