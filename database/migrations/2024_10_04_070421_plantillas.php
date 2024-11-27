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
        Schema::create('plantillas', function (Blueprint $table) {
            $table->bigIncrements('plantilla_id');
            $table->string('nombre_plantilla')->unique();
            $table->string('path_img')->unique();
            $table->integer('longitud_nombre');
            $table->integer('latitud_nombre');
            $table->integer('longitud_texto');
            $table->integer('latitud_texto');
            $table->integer('font_size_nombre');
            $table->string('text_color_nombre');
            $table->integer('font_size_texto');
            $table->string('text_color_texto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plantillas');
    }
};
