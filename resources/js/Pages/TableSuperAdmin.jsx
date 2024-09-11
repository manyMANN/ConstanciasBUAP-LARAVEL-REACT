import React from 'react';

export default function TableSuperAdmin() {
    return (
        <div>
            <h1 className="title">Benemérita Universidad Autónoma de Puebla</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del Usuario</th>
                        <th>Editar usuario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Constancia de Asistencia</td>
                        <td><a href="" className='btn-download' download>Editar</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Constancia de Participación</td>
                        <td><a href="" class="btn-download" download>Editar</a></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}