<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class RegisterUserController extends Controller
{
    public function index()
    {
        return inertia::render('RegisterUser', [
            'user' => Auth::user(),
        ]);
    }
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

        return redirect('/homesuperadmin');
    }
    // Mostrar formulario de edición de usuario
    public function edit($user_id)
    {
        //dd($user_id);
        $user = User::findOrFail($user_id); // Busca al usuario por ID o muestra un error 404
        return Inertia::render('EditUser', [
            'user' => $user, // Pasar los datos del usuario al componente
        ]);
    }

    // Actualizar usuario
    public function update(Request $request, $user_id)
    {
        $user = User::findOrFail($user_id);

        // Validar los datos del formulario
        $validatedData = $request->validate([
            'user_id' => ['required', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'], // Ignorar el email actual del usuario
            'role' => ['required'],
            'password' => ['nullable', 'string', 'min:8'], // Contraseña opcional
        ]);

        // Actualizar los datos del usuario
        $user->user_id = $validatedData['user_id'];
        $user->name = $validatedData['name'];
        $user->email = $validatedData['email'];
        $user->role = $validatedData['role'];
        $user->password = $validatedData['user_id'];

        // Solo actualizar la contraseña si se ingresó una nueva
        if ($validatedData['password']) {
            $user->password = $validatedData['password'];
        }

        // Guardar los cambios
        $user->save();

        return redirect('/homeregisterusers')->with('success', 'Usuario actualizado correctamente...');
    }

    public function destroy($user_id)
    {
        $user = User::findOrFail($user_id);
        $user->delete();
        return redirect('/homeregisterusers')->with('success', 'User eliminada correctamente...');
    }
}
