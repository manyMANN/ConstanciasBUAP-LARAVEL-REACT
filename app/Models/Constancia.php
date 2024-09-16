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
        'constancia_id',
        'user_id',
        'numero_descargas',
        'dems_id',
        'f_direccion',
        'f_coordinacion',
        'f_4ano',
        'f_extra',
        'foja',
        'libroMA',
        'f_3partida',
        'contenido_1',
        'unidad_academica',
        'correo_electronico',
        'nombre_docente',
        'contenido_constancia',
        'periodo',
        'fecha_elaboracion',
        'observaciones',
        'academia',
        'fecha_envio',
        'validacion',
        'factor_esdeped',
        'concepto_esdeped',
    ];
    // Definir la clave primaria si no es 'id'
    protected $primaryKey = 'constancia_id';

    // Indicar que la clave primaria no es autoincrementable
    public $incrementing = false;

    // Indicar el tipo de la clave primaria si no es un entero
    protected $keyType = 'integer';

    // Deshabilitar timestamps si no se usan
    public $timestamps = true;

    // Definir la relación con el modelo User
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
