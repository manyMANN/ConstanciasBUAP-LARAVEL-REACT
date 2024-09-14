import React from 'react';

export default function TableCRUDConstancias() {
    return (
        <div>
            <h1 className="title">Constancias Benemérita Universidad Autónoma de Puebla</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre de Constancias</th>
                        <th>Nombre del Participante</th>
                        <th>Correo del Participante</th>
                        <th>Botón de Descarga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Constancia de Asistencia</td>
                        <td>Eduardo Barriguete Palomino</td>
                        <td>ebarriguett@gmail.com</td>
                        <td><a href="" className='btn-download' download>Editar</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}