<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;
    /**
     * La columna primaria para la tabla.
     *
     * @var string
     */
    protected $primaryKey = 'user_id';

    /**
     * Indica si la clave primaria es autoincrementable.
     *
     * @var bool
     */
    public $incrementing = false; // Porque 'user_id' no es autoincrementable

    /**
     * El tipo de la clave primaria.
     *
     * @var string
     */
    protected $keyType = 'int'; // O el tipo de dato que uses para 'user_id'


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'name',
        'email',
        'role',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
