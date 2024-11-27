<?php

namespace App\Imports;

use App\Models\Constancia;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ConstanciasImport implements ToModel, WithHeadingRow
{
    protected $admin_id;

    // Constructor para aceptar la variable admin_id
    public function __construct($admin_id)
    {
        $this->admin_id = $admin_id;
    }
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new Constancia([
            //=====================INSER POR NOMBRE DECOMLUNA=========================
            //'constancia_id',
            'plantilla_id' => $row['plantilla_id'],
            'user_id' => $row['user_id'],
            'name' => $row['name'] ?? 'Anónimo',
            'email' => $row['email'] ?? '',
            'unidad_academica' => $row['unidad_academica'] ?? '',
            'academia' => $row['academia'] ?? '',
            'periodo' => $row['periodo'] ?? '',
            'dems_id' => $row['dems_id'] ?? '',
            'f_direccion' => $row['f_direccion'] ?? '',
            'f_coordinacion' => $row['f_coordinacion'] ?? '',
            'f_4ano' => $row['f_4ano'] ?? '',
            'f_extra' => $row['f_extra'] ?? '',
            'foja' => $row['foja'] ?? '',
            'libroMA' => $row['libroMA'] ?? '',
            'f_3partida' => $row['f_3partida'] ?? '',
            'contenido_1' => $row['contenido_1'] ?? '',
            'contenido_constancia' => $row['contenido_constancia'] ?? '',
            'fecha_elaboracion' => $row['fecha_elaboracion'] ?? null,
            'observaciones' => $row['observaciones'] ?? '',
            'fecha_envio' => $row['fecha_envio'] ?? null,
            'validacion' => $row['validacion'] ?? '',
            'factor_esdeped' => $row['factor_esdeped'] ?? '',
            'concepto_esdeped' => $row['concepto_esdeped'] ?? '',
            'admin_id' => $this->admin_id,
            //==============INSERT POR NUMERO DE COLUMNAS======================
            /*'user_id' => $row[0], // Primer columna en el archivo
            'name' => $row[1] ?? 'Anónimo', // Segunda columna
            'email' => $row[2] ?? '', // Tercera columna
            'unidad_academica' => $row[3] ?? '', // Cuarta columna
            'academia' => $row[4] ?? '', // Quinta columna
            'periodo' => $row[5] ?? '', // Sexta columna
            'dems_id' => $row[6] ?? '', // Séptima columna
            'f_direccion' => $row[7] ?? '', // Octava columna
            'f_coordinacion' => $row[8] ?? '', // Novena columna
            'f_4ano' => $row[9] ?? '', // Décima columna
            'f_extra' => $row[10] ?? '', // Undécima columna
            'foja' => $row[11] ?? '', // Duodécima columna
            'libroMA' => $row[12] ?? '', // Décimo tercera columna
            'f_3partida' => $row[13] ?? '', // Décimo cuarta columna
            'contenido_1' => $row[14] ?? '', // Décimo quinta columna
            'contenido_constancia' => $row[15] ?? '', // Décimo sexta columna
            'fecha_elaboracion' => $row[16] ?? '', // Décimo séptima columna
            'observaciones' => $row[17] ?? '', // Décimo octava columna
            'fecha_envio' => $row[18] ?? '', // Décimo novena columna
            'validacion' => $row[19] ?? '', // Vigésima columna
            'factor_esdeped' => $row[20] ?? '', // Vigésima primera columna
            'concepto_esdeped' => $row[21] ?? '', // Vigésima segunda columna*/
        ]);
    }
    public function rules(): array
    {
        return [

            // Agrega reglas para los otros campos según sea necesario
        ];
    }
}
