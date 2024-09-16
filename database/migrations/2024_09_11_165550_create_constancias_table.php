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
        Schema::create('constancias', function (Blueprint $table) {
            $table->integer('constancia_id')->unique()->primary();
            $table->integer('user_id');
            $table->integer('numero_descargas')->default(0);
            $table->string('dems_id')->unique(); //ID DEMS
            $table->string('f_direccion')->unique(); //FOLIO DIRECCION
            $table->string('f_coordinacion')->unique(); //FOLIO COORDINACION
            $table->string('f_4ano')->unique(); //FOLIO 4 AÑO
            $table->string('f_extra')->unique(); //FOLIO EXTRA
            $table->string('foja')->unique(); //FOJA
            $table->string('libroMA')->unique(); //LIBRO"M/A"
            $table->string('f_3partida')->unique(); //Folio"Sub-consecutivo No.Partida"
            $table->string('contenido_1')->unique(); //Contenido 2 "encadena"
            $table->string('unidad_academica')->unique(); //Unidad Academica
            $table->string('correo_electronico')->unique(); //Correo electronico
            $table->string('nombre_docente')->unique(); //Nombre del Docente
            $table->string('contenido_constancia')->unique(); //Contenido de la constancia
            $table->string('periodo')->unique(); //Periodo
            $table->string('fecha_elaboracion')->unique(); //Fecha de Documento
            $table->string('observaciones')->unique(); //Observaciones
            $table->string('academia')->unique(); //Academia
            $table->date('fecha_envio')->unique(); //Fecha de envio y/o solicitud
            $table->string('validacion')->unique(); //Validacion
            $table->string('factor_esdeped')->unique(); //Factor ESDEPED
            $table->string('concepto_esdeped')->unique(); //Concepto ESDEPED
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
