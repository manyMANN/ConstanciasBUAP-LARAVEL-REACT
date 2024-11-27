<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pantilla extends Model
{
    use HasFactory;
    protected $table = 'plantillas';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        //'plantilla_id',
        'nombre_plantilla',
        'path_img',
        'longitud_nombre',
        'latitud_nombre',
        'longitud_texto',
        'latitud_texto',
        'font_size_nombre',
        'text_color_nombre',
        'font_size_texto',
        'text_color_texto',
    ];

    protected $primaryKey = 'plantilla_id';
    protected $keyType = 'integer';
    public $incrementing = true;
}
