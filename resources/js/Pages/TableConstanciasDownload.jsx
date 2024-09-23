import React from 'react';
import { useState } from 'react';

export default function TableConstanciasDownload({ constancias }) {
    // Estado para la búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Función para manejar el cambio en la barra de búsqueda
    const handleSearch = (event) => {
        setSearchTerm(event.target.value); // Actualizar el valor de búsqueda
    };

    // Filtrar constancias basado en el valor de búsqueda
    const filteredConstancias = constancias.filter((constancia) =>
        constancia.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        constancia.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        constancia.unidad_academica.toLowerCase().includes(searchTerm.toLowerCase()) ||
        constancia.fecha_elaboracion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h1 className="title">Constancias Benemérita Universidad Autónoma de Puebla</h1>
            <div className="barrabusqueda">
                <input
                    type='text'
                    placeholder="Buscar constancia..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
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
                    {/* Mostrar constancias filtradas */}
                    {filteredConstancias.length > 0 ? (
                        filteredConstancias.map((constancia) => (
                            <tr key={constancia.id}>
                                <td>{constancia.constancia_id}</td>
                                <td>{constancia.user_id}</td>
                                <td>{constancia.name}</td>
                                <td>{constancia.email}</td>
                                <td>{constancia.unidad_academica}</td>
                                <td>{constancia.fecha_elaboracion}</td>
                                <td><a href="" className="btn-download" download>Editar</a></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No se encontraron constancias</td>
                        </tr>
                    )}
                    {/*
                    {constancias.map((constancia) => (
                        <tr key={constancia.id}>
                            <td>{constancia.constancia_id}</td>
                            <td>{constancia.user_id}</td>
                            <td>{constancia.name}</td>
                            <td>{constancia.email}</td>
                            <td>{constancia.unidad_academica}</td>
                            <td>{constancia.fecha_elaboracion}</td>
                            <td><a href="" class="btn-download" download>Download</a></td>
                        </tr>
                    ))}*/}
                </tbody>
            </table>
        </div>
    );
}