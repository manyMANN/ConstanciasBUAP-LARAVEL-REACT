import React from 'react';

export default function TableConstancias() {
    return (
        <div>
            <h1 className="title">Constancias Benemérita Universidad Autónoma de Puebla</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre de Constancias</th>
                        <th>Botón de Descarga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Constancia de Asistencia</td>
                        <td><a href="" className='btn-download' download>Descargar</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Constancia de Participación</td>
                        <td><a href="" class="btn-download" download>Descargar</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Constancia de Participación</td>
                        <td><a href="" class="btn-download" download>Descargar</a></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}