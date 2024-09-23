import React from 'react';

export default function TableConstancias({ constancias }) {
    return (
        <div>
            <h1 className="title">Constancias Benemérita Universidad Autónoma de Puebla</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID Docente</th>
                        <th>Nombre del Docente</th>
                        <th>Correo Electrónico</th>
                        <th>Unidad Académica</th>
                        <th>Fecha de Elaboración</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {constancias.map((constancia) => (
                        <tr key={constancia.id}>
                            <td>{constancia.constancia_id}</td>
                            <td>{constancia.user_id}</td>
                            <td>{constancia.name}</td>
                            <td>{constancia.email}</td>
                            <td>{constancia.unidad_academica}</td>
                            <td>{constancia.fecha_elaboracion}</td>
                            <td><a href="" class="btn-download" download>Editar</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}