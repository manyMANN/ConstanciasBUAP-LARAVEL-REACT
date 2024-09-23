<?php

namespace App\Imports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class UsersImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new User([
            'user_id' => $row['user_id'],
            'name' => $row['name'] ?? '',
            'email' => $row['email'] ?? '',
            'role' => $row['role'],
            'password' => $row['password'],
        ]);
    }
    public function rules(): array
    {
        return [

            // Agrega reglas para los otros campos según sea necesario
        ];
    }
}
