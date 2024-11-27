<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Constancia extends Model
{
    use HasFactory;
    protected $table = 'constancias';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        //'constancia_id',
        'plantilla_id',
        'user_id',
        'numero_descargas',
        'name',
        'email',
        'unidad_academica',
        'academia',
        'periodo',
        'dems_id',
        'f_direccion',
        'f_coordinacion',
        'f_4ano',
        'f_extra',
        'foja',
        'libroMA',
        'f_3partida',
        'contenido_1',
        'contenido_constancia',
        'fecha_elaboracion',
        'observaciones',
        'fecha_envio',
        'validacion',
        'factor_esdeped',
        'concepto_esdeped',
        'admin_id',
    ];
    // Definir la clave primaria si no es 'id'
    protected $primaryKey = 'constancia_id';

    // Indicar que la clave primaria no es autoincrementable
    public $incrementing = false;

    // Indicar el tipo de la clave primaria si no es un entero
    protected $keyType = 'integer';

    // Deshabilitar timestamps si no se usan
    public $timestamps = true;
}
