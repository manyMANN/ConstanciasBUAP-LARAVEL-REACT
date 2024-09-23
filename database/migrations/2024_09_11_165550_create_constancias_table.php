<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rules\Unique;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('constancias', function (Blueprint $table) {
            $table->bigIncrements('constancia_id')->unique()->primary();
            $table->string('user_id');
            $table->string('name'); //Nombre del Docente
            $table->string('email'); //Correo electronico
            $table->string('unidad_academica'); //Unidad Academica
            $table->string('academia'); //Academia
            $table->string('periodo'); //Periodo
            $table->string('dems_id'); //ID DEMS
            $table->string('f_direccion'); //FOLIO DIRECCION
            $table->string('f_coordinacion'); //FOLIO COORDINACION
            $table->string('f_4ano'); //FOLIO 4 AÑO
            $table->string('f_extra'); //FOLIO EXTRA
            $table->string('foja'); //FOJA
            $table->string('libroMA'); //LIBRO"M/A"
            $table->string('f_3partida'); //Folio"Sub-consecutivo No.Partida"
            $table->string('contenido_1'); //Contenido 2 "encadena"
            $table->text('contenido_constancia'); //Contenido de la constancia
            $table->string('fecha_elaboracion'); //Fecha de Documento
            $table->text('observaciones'); //Observaciones
            $table->string('fecha_envio'); //Fecha de envio y/o solicitud
            $table->string('validacion'); //Validacion
            $table->string('factor_esdeped'); //Factor ESDEPED
            $table->string('concepto_esdeped'); //Concepto ESDEPED
            $table->integer('numero_descargas')->default(0);
            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('constancias');
    }
};
