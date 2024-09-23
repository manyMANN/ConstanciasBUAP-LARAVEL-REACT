<?php

namespace App\Http\Controllers;

use App\Models\Constancia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeUserController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        //$userConstancias = DB::table('constancias')->where('user_id', $user['user_id'])->get();
        $userConstancias = Constancia::where('user_id', $user['user_id'])->get();
        return Inertia::render('HomeUser', [
            'user' => $user,
            'constancias' => $userConstancias,
        ]);
    }
}
