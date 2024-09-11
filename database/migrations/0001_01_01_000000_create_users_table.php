<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->unique();
            $table->string('name')->unique();
            $table->string('email')->unique();
            $table->integer('role');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        Schema::create('constancias', function (Blueprint $table) {
            $table->integer('constancia_id')->unique()->primary();
            $table->integer('id');
            $table->string('folio')->unique();
            $table->string('folio_2')->unique();
            $table->string('folio_4_ano')->unique();
            $table->string('folio_extra')->unique();
            $table->string('folio_no')->unique();
            $table->string('libro_no')->unique();
            $table->string('folio_3_no_partida')->unique();
            $table->string('contenido_1')->unique();
            $table->string('unidad_academica')->unique();
            $table->string('correo_electronico')->unique();
            $table->string('id_trabajador')->unique();
            $table->string('nombre_docente')->unique();
            $table->string('contenido_constancia')->unique();
            $table->string('periodo')->unique();
            $table->string('fecha_elaboracion')->unique();
            $table->string('observaciones')->unique();
            $table->string('academia')->unique();
            $table->string('fecha_envio')->unique();
            $table->string('validacion')->unique();
            $table->string('factor_esdeped')->unique();
            $table->string('concepto_esdeped')->unique();
            $table->foreign('id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });

        // Ahora elimina las tablas dependientes
        Schema::dropIfExists('constancias');

        // Finalmente, elimina la tabla 'users'
        Schema::dropIfExists('users');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('constancias');
    }
};
