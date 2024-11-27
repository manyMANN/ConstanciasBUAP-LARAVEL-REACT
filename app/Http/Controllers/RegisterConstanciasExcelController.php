<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Imports\ConstanciasImport;
use App\Models\Constancia;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;


class RegisterConstanciasExcelController extends Controller
{
    public function index()
    {
        $constacias = Constancia::all();
        return inertia::render('RegisterConstanciasExcel', [
            'constancias' => $constacias,
            'user' => Auth::user(),
        ]);
    }

    public function store(Request $request)
    {
        if (!$request->hasFile('file')) {
            return response()->json(['error' => 'No file was uploaded.'], 400);
        }
        // Validar que el archivo está presente y es un Excel
        $request->validate([
            'file' => 'required|file|mimes:xlsx,xls,csv',
        ]);

        // Usar dd() solo para depuración si es necesario
        //dd($request->all(), $request->file('file'));

        try {
            $file = $request->file('file');
            $admin_id = Auth::user()->user_id;
            // Importar el archivo
            Excel::import(new ConstanciasImport($admin_id), $file);

            return response()->json(['message' => 'Archivo importado exitosamente'], 200);
        } catch (\Throwable $e) {
            // Capturar cualquier error en la importación y redirigir con un mensaje de error
            //return redirect('/registerconstanciasexcel')->with('error', 'Hubo un problema al importar el archivo: ' . $e->getMessage());
            Log::error('Error al importar el archivo: ' . $e->getMessage());
            return response()->json(['error' => 'Hubo un problema al importar el archivo: ' . $e->getMessage()], 500);
            //return response()->json(['error' => 'Hubo un problema al importar el archivo: ' . $e], 500);
        }
    }
}
